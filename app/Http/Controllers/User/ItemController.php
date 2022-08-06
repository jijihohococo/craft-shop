<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Item;
use App\Traits\Review;
use App\Http\Resources\ItemResource;
class ItemController extends Controller
{
    use Review;
    //
    public function show(Request $request,$id){
        return response()->json([
            'item' => new ItemResource(Item::selectItemData()
        ->findOrFail($id)) ,
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

    public function search(Request $request,$categoryId){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'items' => Item::selectItemDataWithImages()
            ->where('category_id',$categoryId)
            ->searchWithName( $searchData )
            ->searchWithCategory($searchData)
            ->searchWithSubcategory($searchData)
            ->searchWithBrand($searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function showBestSeller(){
        return response()->json([
            'laptops' => Item::selectItemDataWithImages()->where('category_id',1)->latest('id')->limit(7)->get() ,
            'desktops' => Item::selectItemDataWithImages()->where('category_id',2)->latest('id')->limit(7)->get() ,
            'accessories' => Item::selectItemDataWithImages()->where('category_id',3)->latest('id')->limit(7)->get() ,
            'desktop_components' => Item::selectItemDataWithImages()->where('category_id',7)->latest('id')->limit(7)->get()
        ]);
    }

    public function showGaming(){
        return response()->json([
            'gaming_laptops' =>  Item::selectItemDataWithImages()->where('subcategory_id',46)->latest('id')->limit(7)->get() ,
            'gaming_mouses' => Item::selectItemDataWithImages()->where('subcategory_id',48)->latest('id')->limit(7)->get() ,
            'gaming_keyboards' => Item::selectItemDataWithImages()->where('subcategory_id',49)->latest('id')->limit(7)->get() ,
            'gaming_headphones' => Item::selectItemDataWithImages()->where('subcategory_id',50)->latest('id')->limit(7)->get()
        ]);
    }
}
