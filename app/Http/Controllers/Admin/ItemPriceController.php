<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\ItemPrice;
class ItemPriceController extends ItemVariantCommonController
{

    public $model = 'ItemPrice';

    public $content = 'item_prices';

    public $createEdit = 'item_price';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($itemVariantId)
    {
        //
        return $this->indexPage(
            ItemPrice::selectCurrency()
            ->selectTax()
            ->ofItemVariant($itemVariantId)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function search(Request $request,$itemVariantId){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            ItemPrice::selectCurrency()
            ->selectTax()
            ->ofItemVariant($itemVariantId)
            ->where('price','like',$searchData)
            ->searchWithCurrency($searchData)
            ->latest('id')
            ->paginate(10)
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    public function getEditData($id){
        return ItemPrice::findOrFail($id);
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
