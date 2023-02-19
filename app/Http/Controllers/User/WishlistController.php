<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{WishList,UserData,Item,DeleteData};
use App\Rules\WishListValidation;
use App\Repositories\WishListRepositoryInterface;

class WishlistController extends Controller
{
    //
    private $userId , $wishList;

    public function __construct(WishListRepositoryInterface $wishList){
        $this->userId= UserData::getId() ?? (string) getUserId( authId() ) ;
        $this->wishList=$wishList;
    }

    public function getData(){
        $wishListItems=$this->wishList->get( $this->userId );
        return [
            'wishlist_items' => $wishListItems,
            'wishlist_item_ids' => $wishListItems->pluck('item_id')
        ];
    }
    public function get(Request $request){
        return response()->json($this->getData());
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
        $success=['message' => 'Add to wish list successfully' ];
        $arrayMerge=array_merge($success,$this->getData());
        return response()->json($arrayMerge);
    }

    public function removeItem(Request $request){
        DeleteData::get()->delete();
        $success=['message' => 'Remove from wish list successfully'];
        $arrayMerge=array_merge($success,$this->getData());
        return response()->json($arrayMerge);
    }
}
