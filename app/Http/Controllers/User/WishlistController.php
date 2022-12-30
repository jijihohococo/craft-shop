<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{WishList,UserData,Item,DeleteData};
use App\Rules\WishListValidation;
use App\Repositories\WishListRepositoryInterface;
use Validator;
class WishlistController extends Controller
{
    //
    private $userId , $wishList;

    public function __construct(WishListRepositoryInterface $wishList){
        $this->userId= UserData::getId() ?? (string) getUserId( authId() ) ;
        $this->wishList=$wishList;
    }

    public function get(Request $request){
        return response()->json([
            'wishlist_items' => $this->wishList->get( $this->userId )
        ]);
    }

    public function addItem(Request $request){

        $request->validate([
            'item_id' => ['integer',new WishListValidation($this->userId)]
        ]);
        $item=Item::findOrFail($request->item_id);
        WishList::create([
            'user_id' => $this->userId ,
            'item_id' => $item->id ,
            'created_at' => NOW()
        ]);
        return response()->json([
            'message' => 'Add to wish list successfully',
            'wishlist_items' => $this->wishList->get( $this->userId )
        ]);
    }

    public function removeItem(Request $request){
        DeleteData::get()->delete();
        return response()->json([
            'message' => 'Remove from wish list successfully',
            'wishlist_items' => $this->wishList->get( $this->userId )
        ]);
    }
}
