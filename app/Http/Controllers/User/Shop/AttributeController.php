<?php

namespace App\Http\Controllers\User\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\AttributeRepositoryInterface;
class AttributeController extends Controller
{
    //
    public $attribute;

    public function __construct(AttributeRepositoryInterface $attribute){
        $this->attribute=$attribute;
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
