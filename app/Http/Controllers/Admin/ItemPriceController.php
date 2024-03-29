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
    public function index(int $itemVariantId)
    {
        //
        return $this->indexPage(
            ItemPrice::selectCurrency()
            ->selectItem()
            ->ofItemVariant($itemVariantId)
            ->latest('id')
            ->paginate(10),$itemVariantId
        );
    }

    public function search(Request $request,int $itemVariantId){
        $searchData='%'.$request->search.'%';
        $searchResult=ItemPrice::selectCurrency()
        ->selectItem()
        ->ofItemVariant($itemVariantId)
        ->where('price','like',$searchData)
        ->searchWithCurrency($searchData)
        ->latest('id')
        ->paginate(10);
        return $this->indexPage(
            !empty($searchResult->items()) ?
            $searchResult :
            ItemPrice::selectCurrency()
            ->selectItem()
            ->whereIn('id',ItemPrice::getIdsBySearchCreate($itemVariantId,$request->search) )
            ->latest('id')
            ->paginate(10)
            ,$itemVariantId);
    }

    private function getData($request,int $itemVariantId){
        return [
            'currency_id' => $request->currency_id ,
            'item_variant_id' => $itemVariantId,
            'price' => $request->price
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,int $itemVariantId)
    {
        //
        $request->validate($this->validateData());
        ItemPrice::create($this->getData($request,$itemVariantId));
        return response()->json([
            'message' => 'Item Price is created successfully'
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

    public function create(int $itemVariantId){
        return response()->json([
            'item_variant' => $this->getItemVariant($itemVariantId)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        //
        $itemPrice=ItemPrice::lockForUpdate()->findOrFail($id);
        $request->validate($this->validateData());
        $itemPrice->update($this->getData($request,$itemPrice->item_variant_id));
        return response()->json([
            'message' => 'Item Price is updated successfully'
        ]);
    }

    private function validateData(){
        return [
            'currency_id' => ['required','integer'],
            'price' => requiredDouble()
        ];
    }
}
