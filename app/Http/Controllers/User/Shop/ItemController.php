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

        if($content!=='All'){
            $items=$request->search==NULL ? $this->item->getByContent($content,$contentId) : $this->item->searchByContent($content,$contentId,'%'.$request->search.'%');
        }

        if($content=='All'){
            $items=$this->item->getAll();
            if($request->search!==NULL){
                $items=$items->searchData( '%' . $request->search . '%' );
            }
        }



        if(!empty($items) && $request->brands!==NULL){
            $items=$items->whereInBrandIds($request->brands);
        }

        if(!empty($items) &&  $request->colors!==NULL){
            $items=$items->whereInColorIds($request->colors);
        }

        if(!empty($items) && $request->sets!==NULL){
            $items=$items->whereInAttributeSets($request->sets);
        }
        
        return response()->json([
            'items' => empty($items) ? $items : $items->latest('id')->paginate(10)
        ]);
    }
}
