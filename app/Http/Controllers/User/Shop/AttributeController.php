<?php

namespace App\Http\Controllers\User\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\AttributeRepositoryInterface;
use App\Traits\RepositoryTrait;
class AttributeController extends Controller
{
    //

    use RepositoryTrait;

    public $attribute;

    public $acceptArray=[
        'category',
        'subcategory',
        'brand'
    ];

    public function __construct(AttributeRepositoryInterface $attribute){
        $this->attribute=$attribute;
        $this->content='attribute';
    }

    public function getAttributesByContent(Request $request,$content,$contentId){
        return $this->makeContent($content,$contentId,$request->search);
    }

    // public function getAttributesByCategory(Request $request,$categoryId){
    //     return $this->getContent('category',$categoryId);
    // }

    // public function getAttributesBySubcategory(Request $request,$subcategoryId){
    //     return $this->getContent('subcategory',$subcategoryId);
    // }

    // public function getAttributesByBrand(Request $request,$brandId){
    //     return $this->getContent('brand',$brandId);
    // }

    // public function getAttributesByCategorySearch(Request $request,$categoryId){
    //     return $this->getContent('category',$categoryId,'%'.$request->search.'%');
    // }

    // public function getAttributesBySubcategorySearch(Request $request,$subcategoryId){
    //     return $this->getContent('subcategory',$subcategoryId,'%'.$request->search.'%');
    // }

    // public function getAttributesByBrandSearch(Request $request,$brandId){
    //     return $this->getContent('brand',$brandId,'%'.$request->search.'%');
    // }
}
