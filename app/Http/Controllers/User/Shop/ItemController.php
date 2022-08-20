<?php

namespace App\Http\Controllers\User\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\ItemRepositoryInterface;
class ItemController extends Controller
{
    //
    public $item;

    public function __construct(ItemRepositoryInterface $item){
        $this->item=$item;
    }

    public function getItemsByCategory(Request $request,$categoryId){
        return response()->json([
            'items' => $this->item->getByContent('category',$categoryId)
        ]);
    }

    public function getItemsBySubcategory(Request $request,$subcategoryId){
        return response()->json([
            'items' => $this->item->getByContent('subcategory',$subcategoryId)
        ]);
    }

    public function getItemsByBrand(Request $request,$brandId){
        return response()->json([
            'items' => $this->item->getByContent('brand',$brandId)
        ]);
    }
}
