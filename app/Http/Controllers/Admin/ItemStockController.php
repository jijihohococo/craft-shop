<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\ItemStock;
use App\Rules\StockValidation;
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
        $request->validate($this->validateData($itemVariantId));
        $opening=ItemStock::where( 'item_variant_id' , $itemVariantId )->latest('id')->first();
        $qty=$opening==null ? $request->qty : $opening->stock+ $request->qty;
        ItemStock::sharedLock()->create([
            'item_variant_id' => $itemVariantId , 
            'qty' => $request->qty , 
            'stock' => $qty ,
            'available_stock' => $request->available_stock  
        ]);
        return response()->json([
            'message' => "Item Stock is created successfully"
        ]);
    }

    public function create($itemVariantId){
        return response()->json([
            $this->createEdit => ItemStock::where('item_variant_id',$itemVariantId)->latest('id')->first() ,
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
    public function update(Request $request, $id)
    {
        //
     $openingItem=ItemStock::lockForUpdate()->findOrFail($id);
     $request->validate($this->validateData($openingItem->item_variant_id,$id));
     $updatedStock=($openingItem->stock-$openingItem->qty)+$request->qty;
     if($request->available_stock>$updatedStock){
        return makeErrorMessage([
            'available_stock' => [stockWarning()]
        ]);
    }
    $openingItem->update([
        'stock' => $updatedStock ,
        'available_stock' => $request->available_stock,
        'qty' => $request->qty
    ]);

    return response()->json([
        'message' => "Item Stock is updated successfully"
    ]);
}

private function validateData($itemVariantId,$id=NULL){
    return [
        'qty' => ['required','integer'],
        'available_stock' => ['required','integer', new StockValidation($itemVariantId)]
    ];
}
}
