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
        $this->userId=getUserId( authId() );
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

    public function addItem(Request $request){

        $request->validate([
            'item_id' => ['integer',new WishListValidation($this->userId)]
        ]);
        WishList::create([
            'user_id' => $this->userId ,
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
