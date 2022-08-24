<?php

namespace App\Http\Controllers\User\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\ColorRepositoryInterface;
use App\Traits\RepositoryTrait;
class ColorController extends Controller
{
    //
    use RepositoryTrait;

    public $color;

    public $acceptArray=[
        'category',
        'subcategory',
        'brand'
    ];

    public function __construct(ColorRepositoryInterface $color){
        $this->color=$color;
        $this->content='color';
    }

    public function getColorsByContent(Request $request,$content,$contentId){
        return $this->makeContent($content,$contentId,$request->search);
    }

    // public function getColorsByCategory(Request $request,$categoryId){
    //     return $this->getContent('category',$categoryId);
    // }

    // public function getColorsBySubcategory(Request $request,$subcategoryId){
    //     return $this->getContent('subcategory',$subcategoryId);
    // }

    // public function getColorsByBrand(Request $request,$brandId){
    //     return $this->getContent('brand',$brandId);
    // }

    // public function getColorsByCategorySearch(Request $request,$categoryId){
    //     return $this->getContent('category',$categoryId,'%'.$request->search.'%');
    // }

    // public function getColorsBySubcategorySearch(Request $request,$subcategoryId){
    //     return $this->getContent('subcategory',$subcategoryId,'%'.$request->search.'%');
    // }

    // public function getColorsByBrandSearch(Request $request,$brandId){
    //     return $this->getContent('brand',$brandId,'%'.$request->search.'%');
    // }
}
