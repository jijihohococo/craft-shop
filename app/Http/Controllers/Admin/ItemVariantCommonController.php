<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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
    }

    public function indexPage($data,$itemVariantId){
        return response()->json([
            $this->content => $data ,
            'item_variant' => ItemVariant::selectItem()->
        selectColor()->findOrFail($itemVariantId)
        ]);
    }

    public function createEditPage($data,$itemVariantId){
        return response()->json([
            $this->createEdit => $data ,
            'item_variant' => ItemVariant::selectItem()->
        selectColor()->findOrFail($itemVariantId)
        ]);   
    }
}
