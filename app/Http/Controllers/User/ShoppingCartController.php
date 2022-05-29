<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ShoppingCart;
class ShoppingCartController extends Controller
{
    //

    public function get(Request $request){
        $user=auth('user_api')->user();
        return response()->json([
            'shopping_cart_items' => $user!==null ? ShoppingCart::selectUser()
            ->selectItem()
            ->ofUser($user->id)
            ->latest('id')
            ->get() : []
        ]);
    }

    public function add(Request $request,$itemId){

    }

    public function remove(Request $request,$itemId){

    }
}
