<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Collection;
use DB;
class CollectionController extends CommonController
{

    public $model = 'Collection';

    public $content = 'collections';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(
            Collection::latest('id')->paginate(10)
        );
    }

    public function trash(){
        return $this->indexPage(
            Collection::onlyTrashed()
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
        $collection=new Collection($request->all() );
        oneFileUpload(['file' => 'pic',
            'name'=> cutSpeicialChar(rand() . $request->name) ,
            'path'=>'collection_images',
            'old_file'=>null , 
            'width'  => 138 , 
            'height' => 80 ],$request,$collection );
        $collection->save( $collection->getAttributes() );
        return response()->json([
            'message' => $collection->name . ' Collection is created successfully'
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
            'collection' => Collection::findOrFail($id)
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
    }


    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Collection::searchWithName($searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Collection::onlyTrashed()
            ->searchWithName($searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    private function validateData($id=NULL){
        return [
            'name' => uniqueColumn($this->content,$id) ,
            'pic' => $id==null ? requiredImage() : nullableImage()
        ];
    }
}
