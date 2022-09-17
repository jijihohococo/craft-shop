<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ItemStock;
class ItemStockController extends ItemVariantCommonController
{

    public $model = 'ItemStock';

    public $content = 'item_stocks';

    public $createEdit = 'item_stock';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index($itemVariantId)
    {
        //
        return $this->indexPage(ItemStock::ofItemVariant($itemVariantId)->latest('id')->paginate(10),$itemVariantId);
    }

    public function search(Request $request,$itemVariantId){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            ItemStock::ofItemVariant($itemVariantId)
            ->where('qty','like',$searchData)
            ->orWhere('stock','like',$searchData)
            ->orWhere('available_stock','like',$searchData)
            ->latest('id')
            ->paginate(10) , $itemVariantId
        );
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        return response()->json([
            'item_stock' => ItemStock::findOrFail($id)
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
}
