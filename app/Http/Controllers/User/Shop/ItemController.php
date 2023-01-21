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
        'all',
        'category',
        'subcategory',
        'brand'
    ];

    public function __construct(ItemRepositoryInterface $item){
        $this->item=$item;
    }

    public function getItems($items,$sorting){
        switch ($sorting) {
            case 'id':
            return $items->latest('id')->paginate(10);
            break;

            case 'price_high':
            return $items->orderBy('normal_price','DESC')->paginate(10);
            break;

            case 'price_low':
            return $items->orderBy('normal_price','AESC')->paginate(10);
            break;

            case 'user_review':
            return  $items->orderBy('average_reviews','DESC')->paginate(10);
            break;
            
            default:
            return $items->latest('id')->paginate(10);
            break;
        }
    }

    public function shop(Request $request,$content,$contentId=null){
        $validator=$this->makeValidator($this->makeInputData($content,$contentId,$request->search),$this->acceptArray );
        if($validator->fails()){
            return makeErrorMessage($validator->errors());
        }
        $items=$itemIds=[];

        if($content!=='all'){
            $items=$request->search==NULL ? $this->item->getByContent($content,$contentId) : $this->item->searchByContent($content,$contentId,'%'.$request->search.'%');
        }

        if($content=='all'){
            $items=$this->item->getAll();
            if($request->search!==NULL){
                $items=$items->searchData( '%' . $request->search . '%' );
            }
        }



        if(!empty($items) && $request->brands!==NULL){
            $brands=explode(',', $request->brands);
            $items=$items->whereInBrandIds($brands);
        }

        if(!empty($items) &&  $request->colors!==NULL){
            $colors=explode(',',$request->colors);
            $items=$items->whereInColorIds($colors);
        }

        if(!empty($items) && $request->sets!==NULL){
            $sets=explode(',', $request->sets);
            $items=$items->whereInAttributeSets($sets);
        }

        if(!empty($items) && $request->min_price!==NULL && $request->max_price!==NULL ){
            $items=$items->betweenPrice($request->min_price,$request->max_price);
        }

        if(!empty($items)){
            $itemIds=$items->get()->pluck('id')->toArray();
            $items=$this->getItems($items,$request->sorting);
        }
        return response()->json([
            'items' => $items ,
            'max_price' => $this->item->getMaxPrice($itemIds) ,
            'min_price' => $this->item->getMinPrice($itemIds)
        ]);
    }
}
