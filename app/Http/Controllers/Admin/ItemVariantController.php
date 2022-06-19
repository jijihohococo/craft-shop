<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ItemVariant;
class ItemVariantController extends Controller
{
    //
    public function find($id){
        $itemVariant=ItemVariant::findOrFail($id);
        return response()->json([
            'item' => $itemVariant->item->name ,
            'color' => $itemVariant->color->name
        ]);
    }
}
