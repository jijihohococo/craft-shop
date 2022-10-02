<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{ItemVariant,ShoppingCart,UserData};
use App\Repositories\ShoppingCartRepositoryInterface;
class ShoppingCartController extends Controller
{
    //
    private $userId , $shoppingCart;

    public function __construct(ShoppingCartRepositoryInterface $shoppingCart){
        $this->userId= UserData::getId() ?? (string) getUserId( authId() ) ;
        $this->shoppingCart=$shoppingCart;
    }

    public function get(Request $request){
        return response()->json([
            'shopping_cart_items' => $this->shoppingCart->get($this->userId)
        ]);
    }

    public function addSimpleItem(Request $request,$itemVariantId){
        $this->shoppingCart->updateOrCreate(['varientID' => ItemVariant::findOrFail($itemVariantId)->id ,
                'userID' => $this->userId ,
                'qty' => 1 ,
                'qtyCheck' => "simple" ]);
        return response()->json([
            'message' => 'Add to shopping cart successfully'
        ]);
    }

    public function addDetailItem(Request $request,$itemVariantId){
        $this->shoppingCart->updateOrCreate(['varientID' => ItemVariant::findOrFail($itemVariantId)->id ,
                'userID' => $this->userId ,
                'qty' => $request->qty ,
                'qtyCheck' => "multiple" ]);
        return response()->json([
            'message' => 'Add to shopping cart successfully'
        ]);
    }

    public function removeItem(Request $request){
        DeleteData::get()->delete();
        return response()->json([
            'message' => 'Remove from shopping cart successfully'
        ]);
    }
}
