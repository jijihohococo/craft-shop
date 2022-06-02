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
        $userId=getUserId( authId() );
        return response()->json([
            'wish_list_items' => WishList::selectUser()
            ->selectItem()
            ->ofUser($userId)
            ->latest('id')
            ->get()
        ]);
    }

    public function validateData($itemId,$userId){
       return Validator::make(request()->all(), [
        'item_id' => new WishListValidation($itemId,$userId)
    ] );
   }

   public function addItem(Request $request,$itemId){
    $userId=getUserId( authId() );
    if ($this->validateData($itemId,$userId)->fails() ) {
        return response()->json([
            'message' => 'error'
        ],422);
    }
    WishList::create([
        'user_id' => $userId ,
        'item_id' => $itemId ,
        'created_at' => NOW()
    ]);
    return response()->json([
        'message' => 'Add To Wish List Successfully'
    ]);
}

public function removeItem(Request $request,$wishId){
    WishList::findOrFail($wishId)->delete();
    return response()->json([
        'message' => 'Remove From Wish List Successfully'
    ]);
}
}
