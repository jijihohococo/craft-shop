<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Promotion;
class PromotionController extends CommonController
{

    public $model = 'Promotion';

    public $content = 'promotions';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(
            Promotion::latest('id')->paginate(10)
        );
    }

    public function trash(){
        return $this->indexPage(
            Promotion::onlyTrashed()
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
        Promotion::create($request->all());
        return response()->json([
            'message' => $request->name . ' Promotion is created successfully'
        ]);
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
            'promotion' => Promotion::findOrFail($id)
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
        Promotion::findOrFail($id)->update($request->all());
        return response()->json([
            'message' => $request->name . ' Promotion is updated successfully'
        ]);

    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Promotion::searchWithName($searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Promotion::onlyTrashed()
            ->searchWithName($searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function get(){
        return $this->indexPage(
            (new Promotion)->getAll()
        );
    }
}
