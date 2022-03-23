<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Item,ItemImage};
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
            'items' => Item::withTrashed()
            ->selectCategoryName()
            ->latest('id')->paginate(10)
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
            'item' => Item::with('pics')->findOrFail($id)
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
        DB::commit();
        return response()->json([
            'message' => $request->name . ' Item is updated successfully'
        ]);
    }

    public function insertImage($id){
      upload_document(request()->pics,
        [
          'name'=>cutSpeicialChar(request()->name),
          'path'=>'item_images/',
          'id'=>'item_id',
          'data_id'=>$id,
          'obj'=>'App\Models\ItemImage',
          'file'=>'filename'] );
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
        'items' => Item::withTrashed()
        ->selectCategoryName()
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
}
