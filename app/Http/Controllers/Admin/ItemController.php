<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Item,ItemImage,ItemAttribute,ItemAttributeSet};
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
            'items' => Item::selectCategory()
            ->latest('id')->paginate(10)
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
        $this->insertImage($item->id);
        $this->addAttributes($item->id,request('attributes'));
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
            'item' => Item::with('pics')->findOrFail($id) ,
            'attributes' => ItemAttribute::where('item_id',$id)->get()
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
        $this->insertImage($id);
        $this->addAttributes($id,request('attributes'),'yes');
        DB::commit();
        return response()->json([
            'message' => $request->name . ' Item is updated successfully'
        ]);
    }

    private function insertImage($id){
      upload_document(request()->pics,
        [
          'name'=>cutSpeicialChar(request()->name),
          'path'=>'item_images/',
          'id'=>'item_id',
          'data_id'=>$id,
          'obj'=>'App\Models\ItemImage',
          'file'=>'filename'] );
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
    foreach($attributes as $attribute){
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
        'category_id' => ['required','integer']
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

public function deleteItemImages(Request $request,$id){
    $itemImages=ItemImage::where('item_id',$id)->get();
    foreach($itemImages as $image){
        File::delete(storage_path('app/public/item_images/'.$image->filename  ));
    }
    ItemImage::where('item_id',$id)->delete();
    return response()->json([
        'message' => 'Images are deleted successfully'
    ]);
}

public function imageDelete(Request $request,$id){
    $image=ItemImage::findOrFail($id);
    File::delete(storage_path('app/public/item_images/'.$image->filename  ));
    $image->delete();
    return response()->json([
        'message' => 'Image is deleted successfully'
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
