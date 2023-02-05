<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{ItemVariant,ShoppingCart,UserData,DeleteData};
use App\Repositories\ShoppingCartRepositoryInterface;
class ShoppingCartController extends Controller
{
    //
    private $userId , $shoppingCart;
    private $successMessage=['message' => 'Add to shopping cart successfully'];
    private $removeMessage=['message' => 'Remove from shopping cart successfully'];

    public function __construct(ShoppingCartRepositoryInterface $shoppingCart){
        $this->userId= UserData::getId() ?? (string) getUserId( authId() ) ;
        $this->shoppingCart=$shoppingCart;
    }

    public function getData(){
        return [
            'shopping_cart_items' => $this->shoppingCart->get($this->userId)
        ];
    }

    public function get(Request $request){
        return response()->json($this->getData());
    }

    public function addSimpleItem(Request $request,ItemVariant $itemVariant){
        $this->shoppingCart->updateOrCreate(['variantID' => $itemVariant->id ,
                'userID' => $this->userId ,
                'qty' => 1 ,
                'qtyCheck' => "simple" ]);
        $arrayMerge=array_merge($this->successMessage,$this->getData());
        return response()->json($arrayMerge);
    }

    public function addDetailItem(Request $request,ItemVariant $itemVariant){
        $this->shoppingCart->updateOrCreate(['variantID' => $itemVariant->id ,
                'userID' => $this->userId ,
                'qty' => $request->qty ,
                'qtyCheck' => "multiple" ]);
        $arrayMerge=array_merge($this->successMessage,$this->getData());
        return response()->json($arrayMerge);
    }

    public function removeItem(Request $request){
        DeleteData::get()->delete();
        $arrayMerge=array_merge($this->removeMessage,$this->getData());
        return response()->json($arrayMerge);
    }
}
