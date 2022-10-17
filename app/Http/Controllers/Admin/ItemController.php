<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\{Item,ItemImage,ItemAttribute,ItemAttributeSet,ItemVariant,ItemTax};
use DB,File;
class ItemController extends CommonController
{

    public $model = 'Item';

    public $content = 'items';

    private $taxes=[];

    public function __construct(){
        parent::__construct();
        $this->middleware('rolePermission:'.$this->model.',delete')->only(['deleteItemImages','imageDelete']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(
            Item::selectItemData()
            ->latest('id')
            ->paginate(10)
        );
    }

    public function trash(){
        return $this->indexPage(
            Item::onlyTrashed()
            ->selectItemData()
            ->latest('id')
            ->paginate(10)
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    private function insertColors($colors,$itemId,$update=NULL){

        if(isset($colors)){
            sort($colors);
            $colorsWithFiles=$oldColors=$oldColorIds=[];
            if($update=="yes"){
                // all color ids of item //
                $oldColorIds=ItemVariant::select('color_id')
                ->where('item_id',$itemId)
                ->orderBy('color_id')
                ->get()
                ->pluck('color_id')
                ->toArray();

                
                if($oldColorIds!==$colors){

                    $itemVariants= ItemVariant::select(['id','color_id'])
                    ->where('item_id',$itemId)
                    ->orderBy('color_id')
                    ->get()
                    ->pluck('id','color_id')
                    ->toArray();

                    $itemImages=ItemImage::whereIn('item_variant_id', 
                        function($query) use ($itemId) {
                            $query->select('id')
                            ->from('item_variants')
                            ->where('item_id',$itemId)
                            ->orderBy('color_id')
                            ->get()
                            ->pluck('id');
                        }
                    )->orderBy('item_variant_id')
                    ->get();

                    foreach($itemImages as $image){
                        if( in_array($image->item_variant_id, $itemVariants) ){
                            $colorId=array_search($image->item_variant_id, $itemVariants );
                            if($colorId!==NULL){
                                $colorsWithFiles[$colorId][]=$image->filename;
                            }
                        }
                    }
                }
            }
            if(!empty($colorsWithFiles)){
            // color ids with files //
                $oldColors=array_keys($colorsWithFiles);
            // color ids with files //
            }

            $insertObjArray=$deleteColors=$deleteColorIds=[];
            if( (count($colors)>=count($oldColorIds)) && $oldColorIds!==$colors ){
                foreach( array_filter($colors) as $key => $color ){
                    // if color is not in old color ids //
                    if(!in_array($color, $oldColorIds)  ){
                        array_push($insertObjArray, [
                            'item_id' => $itemId ,
                            'color_id' => $color
                        ]);
                    }

                    // if old color (with file) is not in request colors //
                    if(isset($oldColors[$key]) && !in_array($oldColors[$key], $colors) ){
                        $deleteColors[]=$oldColors[$key];
                    }

                    // if old color (with or without file) is not in request colors//
                    if(isset($oldColorIds[$key]) && !in_array($oldColorIds[$key], $colors) ){
                        $deleteColorIds[]=$oldColorIds[$key];
                    }
                }

            }elseif( count($colors) < count($oldColorIds) ){

                foreach( $oldColorIds as $key => $oldColorId ){
                    // if old color (with or without file) is not in request colors //
                    if( !in_array($oldColorId, $colors) ){

                        $deleteColorIds[]=$oldColorId;
                    }

                    // if old color (with file) is not in request colors //
                    if( isset($oldColors[$key]) && 
                        in_array($oldColors[$key],$oldColorIds) && 
                        !in_array($oldColors[$key],$colors)  ){

                        $deleteColors[]=$oldColors[$key];
                }
                    // if request color is in old colors (with or without file) //
                if(isset($colors[$key]) && !in_array($colors[$key], $oldColorIds) ){
                    array_push($insertObjArray,[
                        'item_id' => $itemId ,
                        'color_id' => $colors[$key]
                    ]);
                }
            }

        }
        if(!empty($deleteColors)){
            $deleteItemVariants=ItemVariant::select('id')
            ->where('item_id',$itemId)
            ->whereIn('color_id',$deleteColors)
            ->get()
            ->pluck('id');
            $deleteImages=ItemImage::whereIn('item_variant_id',
                $deleteItemVariants)->get();

            foreach ($deleteImages as $key => $image) {
                    // code...
                File::delete(storage_path('app/public/item_images/'.$image->filename  ));
            }
            ItemImage::whereIn('item_variant_id',
                $deleteItemVariants)->delete();
        }
        if(!empty($deleteColorIds)){
            ItemVariant::where('item_id',$itemId)
            ->whereIn('color_id',$deleteColorIds)
            ->delete();
        }
        if(!empty($insertObjArray)){
            ItemVariant::insert($insertObjArray);
        }
    }
}

private function insertItemTaxes($taxes,$itemId,$update=NULL){
    add_high_light([
        'col'=>$taxes,
        'old_col' => $this->taxes ,
        'obj' => 'App\Models\ItemTax',
        'parent_id'=>'item_id',
        'parent_data'=>$itemId,
        'child_col'=>'tax_id',
        'update'=> $update
    ]);
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
        $this->insertItemTaxes($request->taxes,$item->id);
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
            'colors' => ItemVariant::select('color_id')->where('item_id',$id)->get()->pluck('color_id') ,
            'taxes' => ItemTax::select('tax_id')->where('item_id',$id)->get()->pluck('tax_id')
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Item $id)
    {
        //
        $request->validate($this->validateData($item->id));
        DB::beginTransaction();
        $item->update($request->all());
        $this->addAttributes($item->id,request('attributes'),'yes');
        $this->insertColors($request->colors,$item->id,'yes');
        $this->taxes=$item->taxes->pluck('tax_id')->toArray();
        $this->insertItemTaxes($request->taxes,$item->id,'yes');
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
                if(isset($attribute['id']) && is_int((integer)$attribute['id'])){
                    $itemAttribute=ItemAttribute::create([
                        'item_id' => $id ,
                        'attribute_id' => $attribute['id']
                    ]);
                    foreach(explode(',',$attribute['set']) as $set){
                     if(is_int((integer) $set )){
                        ItemAttributeSet::create([
                            'item_attribute_id' => $itemAttribute->id ,
                            'set_id'  => $set
                        ]);
                    }
                }
            }
        }
    }
}

private function validateData($id=NULL){
    return [
        'name' => uniqueColumn($this->content,$id) ,
        'category_id' => ['required','integer'],
        'subcategory_id' => ['required','integer'],
        'brand_id' => ['required','integer'],
        'colors' => ['required','array']
    ];
}

public function search(Request $request){
    $searchData='%'.$request->search.'%';
    return $this->indexPage(
        Item::selectItemData()
        ->searchData($searchData)
        ->searchCreateAndUpdate($searchData)
        ->latest('id')
        ->paginate(10)
    );
}

public function trashSearch(Request $request){
    $searchData='%'.$request->search.'%';
    return $this->indexPage(
        Item::onlyTrashed()
        ->selectItemData()
        ->searchData($searchData)
        ->searchDelete($searchData)
        ->latest('id')
        ->paginate(10)
    );
}

public function getTotal(){
    return response()->json([
        'total_items' => Item::count()
    ]);
}
}
