<?php

namespace App\Http\Controllers\User\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\BrandRepositoryInterface;
use App\Traits\{RepositoryTrait,APIValidator};
class BrandController extends Controller
{
    //
    use RepositoryTrait,APIValidator;
    
    public $brand;

    public $acceptArray=[
        'category',
        'subcategory'
    ];

    public function __construct(BrandRepositoryInterface $brand){
        $this->brand=$brand;
        $this->content='brand';
    }

    public function getBrandsByContent(Request $request,$content,$contentId){
        return $this->makeContent($content,$contentId,$request->search);
    }

    // public function getBrandsByCategory(Request $request,$categoryId){
    //    return $this->getContent('category',$categoryId);
    // }

    // public function getBrandsBySubcategory(Request $request,$subcategoryId){
    //     return $this->getContent('subcategory',$subcategoryId);
    // }

    // public function getBrandsByCategorySearch(Request $request,$categoryId){
    //     return $this->getContent('category',$categoryId,'%'.$request->search.'%');
    // }

    // public function getBrandsBySubcategorySearch(Request $request,$subcategoryId){
    //     return $this->getContent('subcategory',$subcategoryId,'%'.$request->search.'%');
    // }
}
