<?php

namespace App\Http\Controllers\User\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\ItemRepositoryInterface;
use App\Traits\APIValidator;
class ItemController extends Controller
{
    //

    use APIValidator;

    public $item;

    public $acceptArray=[
        'All',
        'category',
        'subcategory',
        'brand'
    ];

    public function __construct(ItemRepositoryInterface $item){
        $this->item=$item;
    }

    public function shop(Request $request,$content,$contentId=null){
        $validator=$this->makeValidator($this->makeInputData($content,$contentId,$request->search),$this->acceptArray );
        if($validator->fails()){
            return $this->makeErrorMessage($validator);
        }
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
