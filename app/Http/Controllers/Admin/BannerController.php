<?php

namespace App\Http\Controllers\Admin;


use Illuminate\Http\Request;
use App\Models\Banner;
use App\Repositories\SeoRepositoryInterface;
use DB;
class BannerController extends CommonController
{

    public $model = 'Banner';

    public $content='banners';

    public $mainData='title';

    private $seo;

    public function __construct(SeoRepositoryInterface $seo){
        parent::__construct($seo);
        $this->seo=$seo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(Banner::selectSeo()
            ->latest('id')
            ->paginate(10));
    }

    public function trash(){
        return $this->indexPage(Banner::onlyTrashed()
            selectSeo()
            ->latest('id')
            ->paginate(10));
    }

    public function create(){
        
    }

    private function uploadPic($request,$banner,$oldFile=NULL){
        oneFileUpload(['file' => 'pic',
            'name'=> cutSpeicialChar(rand() . $request->title) ,
            'path'=>'banner_images',
            'old_file'=>$oldFile , 
            'width'  => 920 , 
            'height' => 480 ],$request,$banner );
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
        $banner=new Banner($request->all() );
        $this->uploadPic($request,$banner);
        $banner->save( $banner->getAttributes() );
        $this->seo->create([
            'title' => $request->title ,
            'description' => $request->title ,
            'type' => $request->title,
            'model' => $this->model,
            'model_id' => $banner->id
        ]);
        DB::commit();
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
    public function edit(Banner $banner)
    {
        //
        return response()->json([
            'banner' => $banner
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Banner $banner)
    {
        //
        $request->validate($this->validateData($banner->id));
        $newBanner=new Banner($request->all());
        $this->uploadPic($request,$newBanner,$banner->pic);
        $banner->update($newBanner->getAttributes());
        return response()->json([
            'message' => $request->title . ' Banner is updated successfully'
        ]);
    }

    private function validateData($id=NULL){
        return [
            'title' => uniqueColumn($this->content,$id,$this->mainData) ,
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
        return $this->indexPage(Banner::selectSeo()
            ->where('title','like',$searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10));
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
                Banner::onlyTrashed()
                ->selectSeo()
                ->searchWithCreate($searchData)
                ->orWhere('title','like',$searchData)
                ->searchDelete($searchData)
                ->latest('id')
                ->paginate(10) );
    }
}
