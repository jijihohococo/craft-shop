<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{ItemVariant,ShoppingCart};
use App\Repositories\ShoppingCartRepositoryInterface;
class ShoppingCartController extends Controller
{
    //
    private $userId , $shoppingCart;

    public function __construct(ShoppingCartRepositoryInterface $shoppingCart){
        $this->userId= (string) getUserId( authId() );
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
            'message' => 'Item is added into shopping cart successfully'
        ]);
    }

    public function addDetailItem(Request $request,$itemVariantId){
        $this->shoppingCart->updateOrCreate(['varientID' => ItemVariant::findOrFail($itemVariantId)->id ,
                'userID' => $this->userId ,
                'qty' => $request->qty ,
                'qtyCheck' => "multiple" ]);
        return response()->json([
            'message' => 'Item is added into shopping cart successfully'
        ]);
    }

    public function removeItem(Request $request,$id){
        ShoppingCart::findOrFail($id)->delete();
        return response()->json([
            'message' => 'Item is removed from shopping cart successfully'
        ]);
    }
}
