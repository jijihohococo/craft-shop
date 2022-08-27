<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Currency;
class CurrencyController extends CommonController
{

    public $model = 'Currency';

    public $content = 'currencies';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json([
            'currencies' => Currency::latest('id')->paginate(10)
        ]);
    }

    public function trash(){
        return response()->json([
            'currencies' => Currency::onlyTrashed()
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
        Currency::create($request->all());
        return response()->json([
            'message' => $request->name .' Currency is created successfully'
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
            'currency' => Currency::findOrFail($id)
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
        Currency::findOrFail($id)->update($request->all());
        return response()->json([
            'message' => $request->name . ' Currency is updated successfully' 
        ]);
    }

    private function validateData($id=NULL){
        return [
            'name' => ['required', 'string', 'max:100', $id==null ? 'unique:currencies' : 'unique:currencies,name,'.$id ],
            'price' => requiredDouble()
        ];
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'currencies' => Currency::searchWithName($searchData)
            ->orWhere('price','like',$searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'currencies' => Currency::onlyTrashed()
            ->searchWithName($searchData)
            ->orWhere('price','like',$searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }
}
