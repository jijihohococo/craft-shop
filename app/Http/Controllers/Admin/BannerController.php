<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Banner;
use App\Traits\AdminRolePermission;
class BannerController extends Controller
{
    use AdminRolePermission;

    public function __construct(){
        $this->authorized('Banner');
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
            'banners' => Banner::latest('id')->paginate(10) 
        ]);
    }

    public function trash(){
        return response()->json([
            'banners' => Banner::onlyTrashed()
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
            'width'  => 920 , 
            'height' => 480 ],$request,$banner );
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
            'width'  => 920 , 
            'height' => 480 ],$request,$newBanner );
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
        'pic' => $id==null ? requiredImage() : nullableImage() ,
        'content' => [
        'nullable',
        'in:'.implode(',', Banner::getContents())
         ],
        'content_id' => ['nullable','string']
    ];
}

public function search(Request $request){
    $searchData='%'.$request->search.'%';
    return response()->json([
        'banners' => Banner::where('title','like',$searchData)
        ->searchCreateAndUpdate($searchData)
        ->latest('id')
        ->paginate(10)
    ]);
}

public function trashSearch(Request $request){
    $searchData='%'.$request->search.'%';
    return response()->json([
        'banners' => Banner::onlyTrashed()
        ->where('title','like',$searchData)
        ->searchDelete($searchData)
        ->latest('id')
        ->paginate(10)
    ]);
}

public function get(){
    return response()->json([
        'banners' => (new Banner)->getAll()
    ]);
}

public function deleteMultiple(Request $request){
    $request->validate([
        'banners' => ['required','string']
    ]);
    $banners=explode(',', $request->banners);
    Banner::whereIn('id',$banners)->delete();
    return response()->json([
        'message' => 'Banners are deleted'
    ]);
}

public function restoreMultiple(Request $request){
    $request->validate([
        'banners' => ['required','string']
    ]);
    $banners=explode(',', $request->banners);
    Banner::withTrashed()->whereIn('id',$banners)->restore();
    return response()->json([
        'message' => 'Banners are restored'
    ]);
}
}
