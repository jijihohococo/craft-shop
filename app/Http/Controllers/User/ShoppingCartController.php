<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ShoppingCart;
class ShoppingCartController extends Controller
{
    //
    private $userId;

    public function __construct(){
        $this->userId=getUserId( authId() );
    }

    public function get(Request $request){
        return response()->json([
            'shopping_cart_items' => ShoppingCart::selectUser()
            ->selectItem()
            ->selectItemColorCode()
            ->ofUser($this->userId)
            ->latest('id')
            ->get()
        ]);
    }

    public function addItem(Request $request,$itemId){

    }

    public function removeItem(Request $request,$itemId){

    }
}
