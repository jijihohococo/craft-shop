<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ItemVariant;
abstract class ItemVariantCommonController extends Controller
{
    //
    public function __construct(){
        $this->middleware('rolePermission:'.$this->model.',read')->only(['index','search']);
        $this->middleware('rolePermission:'.$this->model.',create')->only(['create']);
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

    abstract public function getEditData($id);

    public function create($itemVariantId){
        return $this->createEditPage($itemVariantId);
    }

    public function edit($id)
    {
        //
        $data=$this->getEditData($id);
        return $this->createEditPage($data->item_variant_id,$data);
    }

    public function createEditPage($itemVariantId,$data=NULL){
        return response()->json([
            $this->createEdit => $data ,
            'item_variant' => $this->getItemVariant($itemVariantId)
        ]);   
    }


    private function getItemVariant($itemVariantId){
        return ItemVariant::selectItem()->
        selectColor()->findOrFail($itemVariantId);
    }
}
