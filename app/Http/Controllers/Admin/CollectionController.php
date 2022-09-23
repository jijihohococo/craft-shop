<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\{Collection,ItemCollection};
use DB;
class CollectionController extends CommonController
{

    private $items=[];

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

    private function insertItemCollections($items,$collectionId,$update=NULL){
        add_high_light([
            'col'=>$items,
            'old_col' => $this->items ,
            'obj' => 'App\Models\ItemCollection',
            'parent_id'=>'collection_id',
            'parent_data'=>$collectionId,
            'child_col'=>'item_id',
            'update'=> $update
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
        $collection=new Collection($request->all() );
        oneFileUpload(['file' => 'pic',
            'name'=> cutSpeicialChar(rand() . $request->name) ,
            'path'=>'collection_images',
            'old_file'=>null , 
            'width'  => 138 , 
            'height' => 80 ],$request,$collection );
        $collection->save( $collection->getAttributes() );
        $this->insertItemCollections($request->items,$collection->id);
        DB::commit();
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
            'collection' => Collection::findOrFail($id) ,
            'items' => ItemCollection::where('collection_id',$id)->get()
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
        $collection = Collection::findOrFail($id);
        $newCollection=new Collection($request->all());
        oneFileUpload(['file' => 'pic',
            'name'=> cutSpeicialChar(rand() . $request->name) ,
            'path'=>'collection_images',
            'old_file'=> $collection->pic , 
            'width'  => 138 , 
            'height' => 80 ],$request,$newCollection );
        $collection->update($newCollection->getAttributes());
        $this->items=$collection->items->pluck('item_id')->toArray();
        $this->insertItemCollections($request->items,$id,'yes');
        DB::commit();
        return response()->json([
            'message' => $request->name . ' Item is updated successfully'
        ]);
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
            'pic' => $id==null ? requiredImage() : nullableImage() ,
            'items' => ['required','array']
        ];
    }
}
