<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\{Subcategory,Category};
class SubcategoryController extends CommonController
{

    public $model = 'Subcategory';

    public $content ='subcategories';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(
            Subcategory::latest('id')
            ->selectCategory()
            ->paginate(10)
        );
    }

    public function trash(){
        return $this->indexPage(
            Subcategory::onlyTrashed()
            ->selectCategory()
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
    private function validateData($id=NULL){
        return [
            'name' => ['required', 'string', 'max:100', $id==null ? 'unique:subcategories' : 'unique:subcategories,name,'.$id ] ,
            'category_id' => ["required","integer"]
        ];
    }
    public function store(Request $request)
    {
        //
        $request->validate($this->validateData());
        Subcategory::create($request->all());
        return response()->json([
            'message' => $request->name .' Subcategory is created successfully'
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
            'subcategory' => Subcategory::findOrFail($id)
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
        Subcategory::findOrFail($id)->update($request->all());
        return response()->json([
            'message' => $request->name . ' Subcategory is updated successfully'
        ]);
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Subcategory::selectCategory()
            ->searchWithName($searchData)
            ->searchWithCategory($searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Subcategory::onlyTrashed()
            ->selectCategory()
            ->searchWithName($searchData)
            ->searchWithCategory($searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function get($categoryId){
        return $this->indexPage(
            (new Subcategory)->getByCategoryId($categoryId)
        );
    }

    public function getAll(){
        return $this->indexPage(
            (new Subcategory)->getAll()
        );
    }
}
