<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ShoppingCart;
class ShoppingCartController extends Controller
{
    //

    public function get(Request $request){
        $userId=getUserId( authId() );
        return response()->json([
            'shopping_cart_items' => ShoppingCart::selectUser()
            ->selectItem()
            ->ofUser(1)
            ->latest('id')
            ->get()
        ]);
    }

    public function addItem(Request $request,$itemId){

    }

    public function removeItem(Request $request,$itemId){

    }
}
