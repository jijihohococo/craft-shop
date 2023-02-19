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

    public function show(Request $request,$link){
        $item=Item::selectItemData()
        ->selectPrice()
        ->selectStock()
        ->where('id',function($query) use($link) {
            $query->select('model_id')
            ->from('seos')
            ->where('model','Item')
            ->where('page_link',$link)
            ->limit(1);
        })->first();
        if($item==NULL){
            return response()->json([
                'message' => 'Data not found'
            ],404);
        }
        return response()->json([
            'item' => new ItemResource($item) ,
            'reviews' => $this->getReviews('item_reviews','item_id',$item->id) ,
            'seo' => Seo::getSeo('Item',$item->id)
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

    public function getItemByColorCode($colorCode){
        return response()->json([
            'item' => Item::select(['id'])
            ->selectPriceByColorCode('#'.$colorCode)
            ->first()
        ]);
    }
}
