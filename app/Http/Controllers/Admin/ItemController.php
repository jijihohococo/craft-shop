<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Item,ItemImage,ItemAttribute,ItemAttributeSet,ItemVariant};
use DB,File;
class ItemController extends Controller
{

    public function __construct(){
        $this->middleware('rolePermission:'.Item::$content.',read')->only(['index','search']);
        $this->middleware('rolePermission:'.Item::$content.',create')->only(['create','store']);
        $this->middleware('rolePermission:'.Item::$content.',update')->only(['edit','update']);
        $this->middleware('rolePermission:'.Item::$content.',delete')->only(['destroy','restore','deleteItemImages','imageDelete']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json([
            'items' => Item::select(['id','name','created_at','deleted_at'])
            ->selectCategory()
            ->selectItemVariants()
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function trash(){
        return response()->json([
            'items' => Item::onlyTrashed()
            ->selectCategory()
            ->latest('id')
            ->paginate(10)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return response()->json([
            'item' => new Item
        ]);
    }

    private function insertColors($colors,$itemId,$update=NULL){

        if(isset($colors)){
            sort($colors);
            $colorsWithFiles=[];
            if($update=="yes"){
                $itemVariants= ItemVariant::select(['id','color_id'])
                ->where('item_id',$itemId)
                ->whereIn('color_id',$colors)
                ->orderBy('color_id')
                ->get()
                ->pluck('id','color_id')
                ->toArray();

                $itemImages=ItemImage::whereIn('item_variant_id', 
                    function($query) use ($itemId,$colors) {
                        $query->select('id')
                        ->from('item_variants')
                        ->where('item_id',$itemId)
                        ->whereIn('color_id',$colors)
                        ->orderBy('color_id')
                        ->get()
                        ->pluck('id');
                    }
                )->orderBy('item_variant_id')
                ->get();
               // dd($itemVariants );
                foreach($itemImages as $image){
                    if( in_array($image->item_variant_id, $itemVariants) ){
                        $colorId=array_search($image->item_variant_id, $itemVariants );
                        $colorsWithFiles[$colorId][]=$image->filename;
                    }
                }

                dd($colorsWithFiles);
                

                ItemVariant::where('item_id',$itemId)
                ->whereIn('color_id',$colors)
                ->delete();

            }
            $objArray=$newItemVariantIds=[];
            foreach(array_filter($colors) as $color){
                array_push($objArray , [
                    'item_id' => $itemId ,
                    'color_id' => $color
                ]);
                // $itemVariant=ItemVariant::create([
                //     'item_id' => $itemId ,
                //     'color_id' => $color ,
                //     'created_at' => NOW()
                // ]);
                // if( in_array($color,$colorIds ) ){

                // }
                
            }
            if(!empty($objArray)){
                ItemVariant::insert($objArray);
            }
            // if(!empty($objArray)){
            //     ItemVariant::insert($objArray);
            //     $newItemVariantIds=ItemVariant::select('id')
            //     ->where('item_id',$itemId)
            //     ->whereIn('color_id',$colors)
            //     ->get()
            //     ->pluck('id');
            // }
            // if($update=='yes'){
            //     $itemVariantImages=ItemImage::whereIn('item_variant_id',$itemVariantIds)->orderBy('item_variant_id')->get();
            //     dd($itemVariantImages);
            //     dd($itemVariantIds);
            //    foreach ($itemVariantImages as $key => $image) {
            //     if( in_array($image->item_variant_id, $itemVariantIds) ){
            //        array_push($imgArray, [
            //         'item_variant_id' => $newItemVariantIds[$key] ,
            //         'filename' => $image->filename 
            //        ]);
            //    }
            //    }
            //    ItemImage::whereIn('item_variant_id',$itemVariantIds)->delete();
            //    // ItemImage::insert($imgArray);
            //    // 

            // }
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate($this->validateData());
        DB::beginTransaction();
        $item=Item::create($request->all());
        $this->addAttributes($item->id,request('attributes'));
        $this->insertColors($request->colors,$item->id);
        DB::commit();
        return response()->json([
            'message' => $request->name . ' Item is created successfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        return response()->json([
            'item' => Item::findOrFail($id) ,
            'attributes' => ItemAttribute::where('item_id',$id)->get(),
            'colors' => ItemVariant::select('color_id')->where('item_id',$id)->get()->pluck('color_id')
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $request->validate($this->validateData($id));
        DB::beginTransaction();
        Item::findOrFail($id)->update($request->all());
        $this->addAttributes($id,request('attributes'),'yes');
        $this->insertColors($request->colors,$id,'yes');
        DB::commit();
        return response()->json([
            'message' => $request->name . ' Item is updated successfully'
        ]);
    }

    private function addAttributes($id,$attributes,$update=null){
        if($update=='yes'){
            ItemAttributeSet::whereIn('item_attribute_id',function($query) use($id) {
                $query->select('id')
                ->from('item_attributes')
                ->where('item_id',$id)
                ->get()->toArray();
            })->delete();
            ItemAttribute::where('item_id',$id)->delete();
        }
        if(is_array($attributes)){
            foreach($attributes as $attribute){
                if(isset($attribute['id']) && is_int($attribute['id'])){
                    $itemAttribute=ItemAttribute::create([
                        'item_id' => $id ,
                        'attribute_id' => $attribute['id']
                    ]);
                    foreach(explode(',',$attribute['set']) as $set){
                        ItemAttributeSet::create([
                            'item_attribute_id' => $itemAttribute->id ,
                            'set_id'  => $set
                        ]);
                    }
                }
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $item=Item::withTrashed()->findOrFail($id);
        $item->delete();
        return response()->json([
          'message' => $item->name . ' Item is deleted successfully',
          'deleted_at' => $item->deleted_at
      ]);
    }

    public function restore($id){
     $item=Item::withTrashed()->findOrFail($id);
     $item->restore();
     return response()->json([
      'message' => $item->name . ' Item is restored successfully',
      'deleted_at' => $item->deleted_at
  ]);   
 }

 private function validateData($id=NULL){
    return [
        'name' => ['required', 'string', 'max:100', $id==null ? 'unique:items' : 'unique:items,name,'.$id ] ,
        'category_id' => ['required','integer'],
        'brand_id' => ['required','integer'],
        'colors' => ['required','array']
    ];
}

public function search(Request $request){
    $searchData='%'.$request->search.'%';
    return response()->json([
        'items' => Item::selectCategory()
        ->where('name','like',$searchData )
        ->orWherein('category_id',
            function($query) use($searchData) {
                $query->select('id')
                ->from('categories')
                ->where('name','like', $searchData );
            }
        )
        ->latest('id')->paginate(10)
    ]);
}

public function trashSearch(Request $request){
    $searchData='%'.$request->search.'%';
    return response()->json([
        'items' => Item::onlyTrashed()
        ->selectCategory()
        ->where('name','like',$searchData )
        ->orWherein('category_id',
            function($query) use($searchData) {
                $query->select('id')
                ->from('categories')
                ->where('name','like', $searchData );
            }
        )
        ->latest('id')->paginate(10)
    ]);
}

public function getTotal(){
    return response()->json([
        'total_items' => Item::count()
    ]);
}

public function deleteMultiple(Request $request){
    $request->validate([
        'items' => ['required','string']
    ]);
    $items=explode(',', $request->items);
    Item::whereIn('id',$items)->delete();
    return response()->json([
        'message' => 'Items are deleted'
    ]);
}

public function restoreMultiple(Request $request){
    $request->validate([
        'items' => ['required','string']
    ]);
    $items=explode(',', $request->items);
    Item::withTrashed()->whereIn('id',$items)->restore();
    return response()->json([
        'message' => 'Items are restored'
    ]);
}
}
