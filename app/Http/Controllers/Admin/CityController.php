<?php

namespace App\Http\Controllers\Admin;


use Illuminate\Http\Request;
use App\Models\City;
class CityController extends CommonController
{

    public $model = 'City';

    public $content = 'cities';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(
            City::selectCity()
            ->latest('id')
            ->paginate(10)
        );
    }

    public function trash(){
        return $this->indexPage(
            City::onlyTrashed()
            ->selectCountry()
            ->selectState()
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
        City::create($request->all());
        return response()->json([
            'message' => $request->name .' City is created successfully'
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
    public function edit(City $city)
    {
        //
        return response()->json([
            'city' => $city
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,City $city)
    {
        //
        $request->validate($this->validateData($city->id));
        $city->update($request->all());
        return response()->json([
            'message' => $request->name . ' City is updated successfully' 
        ]);
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            City::selectCity()
            ->searchData($searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            City::onlyTrashed()
            ->selectCity()
            ->trashSearchData($searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    private function validateData($id=NULL){
        return [
            'name' => uniqueColumn($this->content,$id),
            'state_id' => 'required|integer',
            'country_id' => 'required|integer',
            'currency_id' => 'required|integer',
            'delivery_price' => requiredDouble()
        ];
    }
}
