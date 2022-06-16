<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ItemImage;
use File;
class ItemVariantImageController extends Controller
{
    //

    private function insertImage($id){
      upload_document(request()->pics,
        [
          'name'=>cutSpeicialChar(request()->name),
          'path'=>'item_images/',
          'id'=>'item_variant_id',
          'data_id'=>$id,
          'obj'=>'App\Models\ItemImage',
          'file'=>'filename'] );
  }

  public function index($id){
    return response()->json([
        'images' => ItemImage::where('item_variant_id',$id)
        ->latest('id')
        ->get()
    ]);
}

public function save($id){
    $this->insertImage($id);
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
