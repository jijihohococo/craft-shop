<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Color;
class ColorController extends CommonController
{
    
    public $model = 'Color';

    public $content='colors';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(
            Color::latest('id')->paginate(10)
        );
    }

    public function trash(){
        return $this->indexPage(
            Color::onlyTrashed()
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
        Color::create($request->all());
        return response()->json([
            'message' => $request->name . ' Color is created successfully'
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
    public function edit(Color $color)
    {
        //
        return response()->json([
            'color' => $color
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Color $color)
    {
        //
        $request->validate($this->validateData($color->id));
        $color->update($request->all());
        return response()->json([
            'message' => $request->name . ' Color is updated successfully'
        ]);
    }

    private function validateData($id=NULL){
        return [
            'name' => uniqueColumn($this->content,$id) ,
            'color_code' => uniqueColumn($this->content,$id,'color_code')
        ];
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Color::searchWithName($searchData)
            ->orWhere('color_code','like',$searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Color::onlyTrashed()
            ->searchWithCreate($searchData)
            ->trashSearchWithName($searchData)
            ->orWhere('color_code','like',$searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }
}
