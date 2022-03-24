<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Banner;

class BannerController extends Controller
{

    public function __construct(){
        $this->middleware('rolePermission:'.Banner::$content.',read')->only(['index','search']);
        $this->middleware('rolePermission:'.Banner::$content.',create')->only(['create','store']);
        $this->middleware('rolePermission:'.Banner::$content.',update')->only(['edit','update']);
        $this->middleware('rolePermission:'.Banner::$content.',delete')->only(['destroy','restore']);
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
            'banners' => Banner::withTrashed()->latest('id')->paginate(10) 
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
            'banner' => new Banner
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
        $banner=new Banner($request->all() );
        oneFileUpload(['file' => 'pic',
            'name'=> cutSpeicialChar(rand() . $request->title) ,
            'path'=>'banner_images',
            'old_file'=>null , 
            'width'  => null , 
            'height' => null ],$request,$banner );
        $banner->save( $banner->getAttributes() );
        return response()->json([
            'message' => $banner->title . ' Banner is created successfully'
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
            'banner' => Banner::findOrFail($id)
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
        $banner = Banner::findOrFail($id);
        $newBanner=new Banner($request->all());
        oneFileUpload(['file' => 'pic',
            'name'=> cutSpeicialChar(rand() . $request->title) ,
            'path'=>'banner_images',
            'old_file'=> $banner->pic , 
            'width'  => null , 
            'height' => null ],$request,$newBanner );
        $banner->update($newBanner->getAttributes());
        return response()->json([
            'message' => $request->title . ' Banner is updated successfully'
        ]);
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
        $banner=Banner::withTrashed()->findOrFail($id);
        $banner->delete();
        return response()->json([
          'message' => $banner->title . ' Banner is deleted successfully',
          'deleted_at' => $banner->deleted_at
      ]);
    }

    public function restore($id){
     $banner=Banner::withTrashed()->findOrFail($id);
     $banner->restore();
     return response()->json([
      'message' => $banner->title . ' Banner is restored successfully',
      'deleted_at' => $banner->deleted_at
  ]);   
 }

 private function validateData($id=NULL){
    return [
        'title' => ['required', 'string', 'max:100', $id==null ? 'unique:banners' : 'unique:banners,title,'.$id ] ,
        'pic' => $id==null ? requiredImage() : nullableImage()
    ];
}

public function search(Request $request){
    return response()->json([
        'banners' => Banner::withTrashed()
        ->where('title','like','%'.$request->search.'%')
        ->latest('id')
        ->paginate(10)
    ]);
}
}
