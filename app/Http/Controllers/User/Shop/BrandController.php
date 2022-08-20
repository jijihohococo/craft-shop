<?php

namespace App\Http\Controllers\User\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\BrandRepositoryInterface;
use App\Traits\RepositoryTrait;
class BrandController extends Controller
{
    //
    use RepositoryTrait;
    
    public $brand;

    public function __construct(BrandRepositoryInterface $brand){
        $this->brand=$brand;
        $this->content='brand';
    }

    public function getBrandsByCategory(Request $request,$categoryId){
       return $this->getContent('category',$categoryId);
    }

    public function getBrandsBySubcategory(Request $request,$subcategoryId){
        return $this->getContent('subcategory',$subcategoryId);
    }

    public function getBrandsByCategorySearch(Request $request,$categoryId){
        return $this->getContent('category',$categoryId,'%'.$request->search.'%');
    }

    public function getBrandsBySubcategorySearch(Request $request,$subcategoryId){
        return $this->getContent('subcategory',$subcategoryId,'%'.$request->search.'%');
    }
}
