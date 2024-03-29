<?php

namespace App\Http\Controllers\Admin;


use Illuminate\Http\Request;
use App\Models\Country;
class CountryController extends CommonController
{

    public $model='Country';
    
    public $content='countries';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return  $this->indexPage(
            Country::latest('id')->paginate(10)
        );
    }

    public function trash(){
        return $this->indexPage(
           Country::onlyTrashed()
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
        Country::create($request->all());
        return response()->json([
            'message' => $request->name . ' Country is created successfully'
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
    public function edit(Country $country)
    {
        //
        return response()->json([
            'country' => $country
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Country $country)
    {
        //
        $request->validate($this->validateData($country->id));
        $country->update($request->all());
        return response()->json([
            'message' => $request->name . ' Country is updated successfully'
        ]);
    }

    private function validateData($id=NULL){
        return [
            'name' => ['required', 'string', 'max:100', $id==null ? 'unique:countries' : 'unique:countries,name,'.$id ] ,
            'code' => ['required', 'string', 'max:100', $id==null ? 'unique:countries' : 'unique:countries,code,'.$id ]
        ];
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
           Country::searchWithName($searchData)
           ->orWhere('code','like',$searchData)
           ->searchCreateAndUpdate($searchData)
           ->latest('id')
           ->paginate(10)
       );
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
           Country::onlyTrashed()
           ->searchWithCreate($searchData)
           ->trashSearchWithName($searchData)
           ->orWhere('code','like',$searchData)
           ->searchDelete($searchData)
           ->latest('id')
           ->paginate(10)
       );
    }
}
