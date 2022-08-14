<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ShoppingCart;
use App\Repositories\ShoppingCartRepositoryInterface;
class ShoppingCartController extends Controller
{
    //
    private $userId , $shoppingCart;

    public function __construct(ShoppingCartRepositoryInterface $shoppingCart){
        $this->userId=getUserId( authId() );
        $this->shoppingCart=$shoppingCart;
    }

    public function get(Request $request){
        return response()->json([
            'shopping_cart_items' => $this->shoppingCart->get($this->userId)
        ]);
    }

    public function addItem(Request $request,$itemId){

    }

    public function removeItem(Request $request,$itemId){

    }
}
