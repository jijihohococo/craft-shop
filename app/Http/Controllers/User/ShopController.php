<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\{ItemRepositoryInterface,BrandRepositoryInterface};
class ShopController extends Controller
{
    //
    public $item , $brand , $attribute;

    public function __construct(ItemRepositoryInterface $item,BrandRepositoryInterface $brand,
        AttributeResource $attribute){
        $this->item=$item;
        $this->brand=$brand;
        $this->attribute=$attribute;
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
            'brands' => $this->brand->getByContent('category',$categoryId)
        ]);
    }

    public function getBrandsBySubcategory(Request $request,$subcategoryId){
        return response()->json([
            'brands' => $this->brand->getByContent('subcategory',$subcategoryId)
        ]);
    }

    public function getBrandsByCategorySearch(Request $request,$categoryId){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'brands' => $this->brand->searchByContent('category',$categoryId,$searchData)
        ]);
    }

    public function getBrandsBySubcategorySearch(Request $request,$subcategoryId){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'brands' => $this->brand->searchByContent('subcategory',$subcategoryId,$searchData)
        ]);
    }


    public function getAttributesByCategory(Request $request,$categoryId){
        return response()->json([
            'attributes' => $this->attribute->getByContent('category',$categoryId)
        ]);
    }

    public function getAttributesBySubcategory(Request $request,$subcategoryId){
        return response()->json([
            'attributes' => $this->attribute->getByContent('subcategory',$subcategoryId)
        ]);
    }

    public function getAttributesByBrand(Request $request,$brandId){
        return response()->json([
            'attributes' => $this->attribute->getByContent('brand',$brandId)
        ]);
    }
}
