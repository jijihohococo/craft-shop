<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Item;
use App\Traits\Review;
use App\Http\Resources\ItemResource;
use App\Repositories\ItemRepositoryInterface;
class ItemController extends Controller
{
    use Review;
    //
    private $item;

    public function __construct(ItemRepositoryInterface $item){
        $this->item=$item;
    }

    public function show(Request $request,$id){
        return response()->json([
            'item' => new ItemResource(Item::selectItemData()
        ->findOrFail($id)) ,
            'reviews' => $this->getReviews('item_reviews','item_id',$id)
        ]);
    }

    public function showByCategory(Request $request,$categoryId){
        return response()->json([
            'items' => $this->item->getByContent('category',$categoryId)
        ]);
    }

    public function showBySubcategory(Request $request,$subcategoryId){
        return response()->json([
            'items' => $this->item->getByContent('subcategory',$subcategoryId)
        ]);
    }

    public function showByBrand(Request $request,$brandId){
        return response()->json([
            'items' => $this->item->getByContent('brand',$brandId)
        ]);
    }

    public function search(Request $request,$categoryId){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'items' => $this->item->search($categoryId,$searchData)
        ]);
    }

    public function showBestSeller(){
        $item=new Item;
        return response()->json([
            'laptops' => $item->getLaptops(),
            'desktops' => $item->getDesktops() ,
            'accessories' => $item->getAccessories() ,
            'desktop_components' => $item->getDesktopComponents()
        ]);
    }

    public function showGaming(){
        $item=new Item;
        return response()->json([
            'gaming_laptops' =>  $item->getGamingLaptops() ,
            'gaming_mouses' => $item->getGamingMouses() ,
            'gaming_keyboards' => $item->getGamingKeyboards(),
            'gaming_headphones' => $item->getGamingHeadphones()
        ]);
    }

    public function showFeatureProducts(){
        $item=new Item;
        return response()->json([
            'feature_products' => $item->getFeatureProducts()
        ]);
    }

    public function get(){
        return response()->json([
            'items' => Item::selectItemDataWithImages()
            ->selectPrice()
            ->latest('id')
            ->get()
        ]);
    }
}
