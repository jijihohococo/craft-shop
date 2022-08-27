<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
class ItemController extends Controller
{
    //
    public function get(){
        return response()->json([
            'items' => (new Item)->getAll() 
        ]);
    }
}
