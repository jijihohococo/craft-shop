<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\ItemRepositoryInterface;
use App\Models\Brand;
class ShopController extends Controller
{
    //
    public $item;

    public function __construct(ItemRepositoryInterface $item){
        $this->item=$item;
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

    public function getBrandsByCategory(Request $request,$categoryId){
        return response()->json([
            'brands' => Brand::getByItemData('category_id',$categoryId)
            ->latest('name')
            ->get()
        ]);
    }

    public function getBrandsBySubcategory(Request $request,$subcategoryId){
        return response()->json([
            'brands' => Brand::getByItemData('subcategory_id',$categoryId)
            ->latest('name')
            ->get()
        ]);
    }

    public function getBrandsByCategorySearch(Request $request,$categoryId){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'brands' => Brand::getByItemSearch('category_id',$categoryId,$searchData)
            ->latest('name')
            ->get()
        ]);
    }

    public function getBrandsBySubcategorySearch(Request $request,$subcategoryId){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'brands' => Brand::getByItemSearch('subcategory_id',$categoryId,$searchData)
            ->latest('name')
            ->get()
        ]);
    }
}
