<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Tax;
class TaxController extends CommonController
{
    
    public $model = 'Tax';

    public $content = 'taxes';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json([
            'taxes' => Tax::latest('id')->paginate(10)
        ]);
    }

    public function trash(){
        return response()->json([
            'taxes' => Tax::onlyTrashed()
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
        Tax::create($request->all());
        return response()->json([
            'message' => $request->name .' Tax is created successfully'
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
            'tax' => Tax::findOrFail($id)
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
        Tax::findOrFail($id)->update($request->all());
        return response()->json([
            'message' => $request->name .' Tax is updated successfully'
        ]);
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'taxes' => Tax::searchWithName($searchData)
            ->orWhere('rate','like',$searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'taxes' => Tax::onlyTrashed()
            ->searchWithName($searchData)
            ->orWhere('rate','like',$searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function get(Request $request){
        return response()->json([
            'taxes' => (new Tax)->getAll()
        ]);
    }

    private function validateData($id=NULL){
        return [
            'name' => ['required', 'string', 'max:100', $id==null ? 'unique:taxes' : 'unique:taxes,name,'.$id ] ,
            'rate' => requiredDouble()
        ];
    }
}
