<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\SocialMedia;
class SocialMediaController extends CommonController
{

    public $model = 'SocialMedia';

    public $content='social_medias';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(SocialMedia::latest('id')->paginate(10));
    }

    public function trash(){
        return $this->indexPage(SocialMedia::onlyTrashed()->latest('id')->paginate(10));
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

    private function uploadPic($request,$socialMedia,$oldFile=NULL){
        oneFileUpload(['file' => 'pic',
            'name'=> cutSpeicialChar(rand() . $request->name) ,
            'path'=>'social_media_images',
            'old_file'=>$oldFile , 
            'width'  => 920 , 
            'height' => 480 ],$request,$socialMedia );
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
        $socialMedia=new SocialMedia($request->all() );
        $this->uploadPic($request,$socialMedia);
        $socialMedia->save( $socialMedia->getAttributes() );
        return response()->json([
            'message' => $socialMedia->name . ' Social Media is created successfully'
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
            'social_media' => SocialMedia::findOrFail($id)
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
        $socialMedia = SocialMedia::findOrFail($id);
        $newSocialMedia=new SocialMedia($request->all());
        $this->uploadPic($request,$newSocialMedia,$socialMedia->pic);
        $socialMedia->update($newSocialMedia->getAttributes());
        return response()->json([
            'message' => $request->name . ' Social Media is updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    private function validateData($id=NULL){
        return [
            'name' => uniqueColumn($this->content,$id,$this->mainData) ,
            'link' => ['required','max:200'],
            'pic' => $id==null ? requiredImage() : nullableImage()
        ];
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(SocialMedia::searchWithName($searchData)
            ->orWhere('link','like',$searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10));
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(SocialMedia::onlyTrashed()
            ->searchWithName($searchData)
            ->orWhere('link','like',$searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10));
    }
}
