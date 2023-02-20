<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Item,Seo};
use App\Traits\Review;
use App\Http\Resources\ItemResource;
class ItemController extends Controller
{
    use Review;
    //
    private $item;

    public $content = 'Item';

    public function show(Request $request,$link){
        $item=Item::selectItemData()
        ->selectPrice()
        ->selectStock()
        ->whereSeo($link,$this->content)
        ->first();

        return $item!==NULL ? response()->json([
            'item' => new ItemResource($item) ,
            'reviews' => $this->getReviews('item_reviews','item_id',$item->id) ,
            'seo' => Seo::getSeo($this->content,$item->id)
        ]) : dataNotFound();
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

    public function getItemByColorCode($colorCode){
        return response()->json([
            'item' => Item::select(['id'])
            ->selectPriceByColorCode('#'.$colorCode)
            ->first()
        ]);
    }
}
