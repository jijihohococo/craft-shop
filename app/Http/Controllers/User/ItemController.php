<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Item,ItemImage};
use App\Traits\Review;
class ItemController extends Controller
{
    use Review;
    //
    public function show(Request $request,$id){
        return response()->json([
            'item' => Item::findOrFail($id) ,
            'reviews' => $this->getReviews('item_reviews','item_id',$id)
        ]);
    }
}
