<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ItemStock;
class ItemStockController extends Controller
{

    public $model = 'ItemStock';

    public function __construct(){
        $this->middleware('rolePermission:'.$this->model.',read')->only(['index','search']);
        $this->middleware('rolePermission:'.$this->model.',create')->only(['create']);
        $this->middleware('rolePermission:'.$this->model.',update')->only([
            'edit','update'
        ]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($itemVariantId)
    {
        //
        return response()->json([
            'item_stocks' => ItemStock::ofItemVariant($itemVariantId)->latest('id')->paginate(10)
        ]);
    }

    public function search(Request $request,$itemVariantId){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'item_stocks' => ItemStock::ofItemVariant($itemVariantId)
            ->where('qty','like',$searchData)
            ->orWhere('stock','like',$searchData)
            ->orWhere('available_stock','like',$searchData)
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
    public function store(Request $request,$itemVariantId)
    {
        //
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
            'item_quantity' => ItemStock::findOrFail($id)
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
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}