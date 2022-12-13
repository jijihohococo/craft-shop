<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{WishList,UserData};
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

    public function getCount(Request $request){
        return response()->json([
            'number_of_wish' => WishList::ofUser($this->userId)
            ->count()
        ]);
    }

    public function get(Request $request){
        return response()->json([
            'wish_list_items' => $this->wishList->get( $this->userId )
        ]);
    }

    public function addItem(Request $request,Item $item){

        $request->validate([
            'item_id' => ['integer',new WishListValidation($this->userId)]
        ]);
        WishList::create([
            'user_id' => $this->userId ,
            'item_id' => $item->id ,
            'created_at' => NOW()
        ]);
        return response()->json([
            'message' => 'Add to wish list successfully'
        ]);
    }

    public function removeItem(Request $request){
        DeleteData::get()->delete();
        return response()->json([
            'message' => 'Remove from wish list successfully'
        ]);
    }
}
