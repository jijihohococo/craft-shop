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

    public function addItem(Request $request){
        $userId=getUserId( authId() );
        $request->validate([
            'item_id' => ['integer',new WishListValidation($userId)]
        ]);
        WishList::create([
            'user_id' => $userId ,
            'item_id' => $request->item_id ,
            'created_at' => NOW()
        ]);
        return response()->json([
            'message' => 'Add To Wish List Successfully'
        ]);
    }

    public function removeItem(Request $request){
        WishList::findOrFail($request->item_id)->delete();
        return response()->json([
            'message' => 'Remove From Wish List Successfully'
        ]);
    }
}
