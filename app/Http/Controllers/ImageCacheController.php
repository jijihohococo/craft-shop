<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic;
class ImageCacheController extends Controller
{
    //
    public function cacheImage($folder,$imageUrl,$newFolder=null){
        try{
            $cache_image = ImageManagerStatic::cache( function ( $image ) use ($folder , $imageUrl,$newFolder) {
                return $newFolder==null ? 
                $image->make( storage_path('app/public/'. $folder . '/' . $imageUrl ) ) : 
                $image->make( storage_path('app/public/'. $folder . '/' . $newFolder . '/' . $imageUrl ) );
            });
            return \Response::make( $cache_image, 200, [ 'Content-Type' => 'image' ] )
       ->setMaxAge(604800) //seconds
       ->setPublic();
   }catch(\Intervention\Image\Exception\NotReadableException $e){
    abort(404);
   }
}
}
