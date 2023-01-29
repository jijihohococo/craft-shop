<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Category;
use DB;
class CategoryController extends CommonController
{

    public $model = 'Category';

    public $content = 'categories';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(
            Category::latest('id')->paginate(10)
        );
    }

    public function trash(){
        return $this->indexPage(
            Category::onlyTrashed()
            ->latest('id')
            ->paginate(10)
        );
    }

    public function create(){
        
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
        $category=Category::create($request->all());
        $this->seo->create([
            'title' => $request->name ,
            'description' => $request->name ,
            'type' => $request->name,
            'model' => $this->model,
            'model_id' => $category->id
        ]);
        DB::commit();
        return response()->json([
            'message' => $request->name .' Category is created successfully'
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
    public function edit(Category $category)
    {
        //
        return response()->json([
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Category $category)
    {
        //
        $request->validate($this->validateData($category->id));
        $category->update($request->all());
        return response()->json([
            'message' => $request->name . ' Category is updated successfully' 
        ]);
    }

    private function validateData($id=NULL){
        return [
            'name' => uniqueColumn($this->content,$id)
        ];
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Category::searchWithName($searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Category::onlyTrashed()
            ->searchWithCreate($searchData)
            ->trashSearchWithName($searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }
}
