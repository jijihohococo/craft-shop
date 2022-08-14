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
    private $userId;

    public function __construct(){
        $this->userId= (string) getUserId( authId() );
    }

    public function getCount(Request $request){
        return response()->json([
            'number_of_whish' => WishList::ofUser($this->userId)
            ->count()
        ]);
    }

    public function get(Request $request){
        return response()->json([
            'wish_list_items' => WishList::selectUser()
            ->selectItem()
            ->ofUser($this->userId)
            ->latest('id')
            ->get()
        ]);
    }

    public function addItem(Request $request,$itemId){

        $request->validate([
            'item_id' => ['integer',new WishListValidation($this->userId)]
        ]);
        WishList::create([
            'user_id' => $this->userId ,
            'item_id' => $itemId ,
            'created_at' => NOW()
        ]);
        return response()->json([
            'message' => 'Add to wish list successfully'
        ]);
    }

    public function removeItem(Request $request,$itemId){
        WishList::findOrFail($itemId)->delete();
        return response()->json([
            'message' => 'Remove from wish list successfully'
        ]);
    }
}
