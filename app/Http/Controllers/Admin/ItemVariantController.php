<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ItemVariant;
class ItemVariantController extends Controller
{
    //
    public function find($id){
        $itemVariant=ItemVariant::selectItem()->
        selectColor()->findOrFail($id);
        return response()->json([
            'item_variant' => $itemVariant
            // 'item' => $itemVariant->item_name ,
            // 'color' => $itemVariant->color_name
        ]);
    }
}
