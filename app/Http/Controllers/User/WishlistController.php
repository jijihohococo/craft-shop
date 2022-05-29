<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\WishList;
use App\Rules\WishListValidation;
use Validator;
class WishlistController extends Controller
{
    //

    public function get(Request $request){
        $user=auth('user_api')->user();
        return response()->json([
            'wish_list_items' => $user!==null ? WishList::selectUser()
            ->selectItem()
            ->ofUser($user->id)
            ->latest('id')
            ->get() : []
        ]);
    }

    public function validateData($itemId,$userId){
       $this->validateCheck= Validator::make(request()->all(), [
        'item_id' => new WishListValidation($itemId,$userId)
    ] );
       return $this->validateCheck;
   }

   public function add(Request $request,$itemId){
    $userId=null;
    if ($this->validateData($itemId,$userId)->fails() ) {
        return response()->json([
            'message' => 'error'
        ],422);
    }
}

public function remove(Request $request,$itemId){

}
}
