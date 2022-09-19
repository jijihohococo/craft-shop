<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{ItemImage,ItemVariant};
use File;
class ItemVariantImageController extends Controller
{
    //

    private function insertImage($id){
        $itemVariant=ItemVariant::findOrFail($id);
        upload_document(request()->pics,
            [
              'name'=>cutSpeicialChar( $itemVariant->item->name ),
              'path'=>'item_images/',
              'id'=>'item_variant_id',
              'data_id'=>$id,
              'obj'=>'App\Models\ItemImage',
              'file'=>'filename'] );
    }

    public function index($id){
        return response()->json([
            'images' => $this->getImages($id)
        ]);
    }

    public function getImages($id){
        return ItemImage::where('item_variant_id',$id)
            ->latest('id')
            ->get();
    }

    public function upload(Request $request,$id){
        $request->validate([
            'pics' => ['array']
        ]);
        $this->insertImage($id);
        return response()->json([
            'message' => "Item Images are uploaded",
            'images' => $this->getImages($id)
        ]);
    }

    public function deleteItemImages(Request $request,$id){
        $itemImages=ItemImage::where('item_variant_id',$id)->get();
        foreach($itemImages as $image){
            File::delete(storage_path('app/public/item_images/'.$image->filename  ));
        }
        ItemImage::where('item_variant_id',$id)->delete();
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
