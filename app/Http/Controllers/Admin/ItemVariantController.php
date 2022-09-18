<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ItemVariant;
class ItemVariantController extends Controller
{
    //
    public function find($id){
        return response()->json([
            'item_variant' => ItemVariant::selectItem()->
            selectColor()->findOrFail($id)
        ]);
    }
}
