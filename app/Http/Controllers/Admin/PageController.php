<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Page;
use DB;
class PageController extends CommonController
{

    public $model = 'Page';

    public $content='pages';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(
            Page::latest('id')->paginate(10)
        );
    }

    public function trash(){
        return $this->indexPage(
            Page::onlyTrashed()
            ->latest('id')
            ->paginate(10)
        );
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Page::searchWithName($searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Page::onlyTrashed()
            ->searchWithCreate($searchData)
            ->trashSearchWithName($searchData)
            ->searchDelete($searchData)
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
        DB::beginTransaction();
        $page=Page::create($request->all());
        $this->seo->create([
            'title' => $request->name ,
            'description' => $request->name ,
            'type' => $request->name,
            'model' => $this->model,
            'model_id' => $page->id
        ]);
        DB::commit();
        return response()->json([
            'message' => $request->name . ' Page is created successfully'
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
    public function edit(Page $page)
    {
        //
        return response()->json([
            'page' => $page
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Page $page)
    {
        //
        $request->validate($this->validateData($page->id));
        $page->update($request->all());
        return response()->json([
            'message' => $request->name . ' Page is updated successfully'
        ]);
    }

    private function validateData($id=NULL){
        $linkValidation=uniqueColumn($this->content,$id,'link');
        $linkValidation[]='alpha_dash';
        return [
            'name' => uniqueColumn($this->content,$id) ,
            'link' => $linkValidation,
            'description' => ['required','string','max:4294967295']
        ];
    }
}
