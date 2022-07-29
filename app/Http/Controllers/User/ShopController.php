<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Shop;
class ShopController extends Controller
{
    //
    public function get(){
        return response()->json([
            'shop' => Shop::findOrFail(1)
        ]);
    }
}
