<?php

namespace App\Http\Controllers\User\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\ItemRepositoryInterface;
use App\Traits\RepositoryTrait;
class ItemController extends Controller
{
    //
    use RepositoryTrait;

    public $item;

    public function __construct(ItemRepositoryInterface $item){
        $this->item=$item;
        $this->content='item';
    }

    public function getItemsByCategory(Request $request,$categoryId){
        return $this->getContent('category',$categoryId);
    }

    public function getItemsBySubcategory(Request $request,$subcategoryId){
        return $this->getContent('subcategory',$subcategoryId);
    }

    public function getItemsByBrand(Request $request,$brandId){
        return $this->getContent('brand',$brandId);
    }
}
