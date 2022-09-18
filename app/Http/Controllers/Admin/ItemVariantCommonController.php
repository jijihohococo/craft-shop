<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ItemVariant;
abstract class ItemVariantCommonController extends Controller
{
    //
    public function __construct(){
        $this->middleware('rolePermission:'.$this->model.',read')->only(['index','search']);
        $this->middleware('rolePermission:'.$this->model.',create')->only(['store']);
        $this->middleware('rolePermission:'.$this->model.',update')->only([
            'edit','update'
        ]);
        $this->middleware('updateLastData:'.$this->model)->only([
            'edit' , 'update'
        ]);
    }

    public function indexPage($data,$itemVariantId){
        return response()->json([
            $this->content => $data ,
            'item_variant' => $this->getItemVariant($itemVariantId)
        ]);
    }

    public function create($itemVariantId){
        return $this->createEditPage($itemVariantId);
    }

    public function edit($id)
    {
        //
        $model='App\Models\\'.$this->model;
        $data=$model::findOrFail($id);
        return response()->json([
            $this->createEdit => $data ,
            'item_variant' => $this->getItemVariant($data->item_variant_id)
        ]);
    }

    private function getItemVariant($itemVariantId){
        return ItemVariant::selectItem()->
        selectColor()->findOrFail($itemVariantId);
    }
}
