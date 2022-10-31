<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\State;

class StateController extends CommonController
{

    public $model = 'State';

    public $content = 'states';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(
            State::selectCountry()->latest('id')->paginate(10)
        );
    }

    public function trash(){
        return $this->indexPage(
            State::onlyTrashed()
            ->selectCountry()
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
        State::create($request->all());
        return response()->json([
            'message' => $request->name .' State is created successfully'
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
    public function edit(State $state)
    {
        //
        return response()->json([
            'state' => $state
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,State $state)
    {
        //
        $request->validate($this->validateData($state->id));
        $state->update($request->all());
        return response()->json([
            'message' => $request->name . ' State is updated successfully' 
        ]);
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            State::selectCountry()
            ->searchWithName($searchData)
            ->searchWithCountry($searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            State::onlyTrashed()
            ->selectCountry()
            ->searchWithName($searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    private function validateData($id=NULL){
        return [
            'name' => uniqueColumn($this->content,$id),
            'country_id' => 'required|integer'
        ];
    }
}
