<?php

namespace App\Http\Controllers\User\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\BrandRepositoryInterface;
class BrandController extends Controller
{
    //
    public $brand;

    public function __construct(BrandRepositoryInterface $brand){
        $this->brand=$brand;
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
}
