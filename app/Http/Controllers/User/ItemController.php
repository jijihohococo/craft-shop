<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Item;
use App\Traits\Review;
class ItemController extends Controller
{
    use Review;
    //
    public function show(Request $request,$id){
        return response()->json([
            'item' => Item::selectItemDataWithImages()
            ->where('id',$id)
            ->first() ,
            'reviews' => $this->getReviews('item_reviews','item_id',$id)
        ]);
    }

    public function showByCategory(Request $request,$categoryId){
        return response()->json([
            'items' => Item::selectItemDataWithImages()
            ->where('category_id',$categoryId)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function showBySubcategory(Request $request,$subcategoryId){
        return response()->json([
            'items' => Item::selectItemDataWithImages()
            ->where('subcategory_id',$subcategoryId)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function showByBrand(Request $request,$brandId){
        return response()->json([
            'items' => Item::selectItemDataWithImages()
            ->where('brand_id',$brandId)
            ->latest('id')
            ->paginate(10)
        ]);
    }
}
