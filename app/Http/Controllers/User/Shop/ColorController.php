<?php

namespace App\Http\Controllers\User\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\ColorRepositoryInterface;
use App\Traits\{RepositoryTrait,APIValidator};
class ColorController extends Controller
{
    //
    use RepositoryTrait,APIValidator;

    public $color;

    public function __construct(ColorRepositoryInterface $color){
        $this->color=$color;
        $this->content='color';
    }

    public function getColorsByContent(Request $request,$content,$contentId){
        $validator=$this->makeValidator($this->makeInputData($content,$contentId,$request->search),['category','subcategory','brand']);
        if($validator->fails()){
            return $this->makeErrorMessage($validator);
        }
        return $this->getContent($content,$contentId,$this->makeSearch($request->search));
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
