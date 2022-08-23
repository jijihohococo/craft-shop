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
        return $this->getContent('category',$categoryId)->latest('id')->paginate(10);
    }

    public function getItemsBySubcategory(Request $request,$subcategoryId){
        return $this->getContent('subcategory',$subcategoryId)->latest('id')->paginate(10);
    }

    public function getItemsByBrand(Request $request,$brandId){
        return $this->getContent('brand',$brandId)->latest('id')->paginate(10);
    }

    public function shop(Request $request,$content,$contentId=null){

        $items=[];

        if($content!=='NULL' && $request->search==NULL ){
            $items=$this->getContent($content,$contentId);
        }

        if($content!=='NULL' && $request->search!==NULL ){
            $items=$this->getContent($content,$contentId,'%'.$request->search.'%');
        }

        if($content=='NULL'){
            $items=$this->items->getAll();
        }

        if(!empty($items) && $request->brands!==NULL){
            $items=$items->whereInBrandIds($request->brands);
        }

        if(!empty($items) &&  $request->colors!==NULL){
            $items=$items->whereInColorIds($request->colors);
        }

        if(!empty($items) && $request->sets!==NULL){
            
        }

    }
}
