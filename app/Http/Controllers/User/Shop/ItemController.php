<?php

namespace App\Http\Controllers\User\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\ItemRepositoryInterface;
class ItemController extends Controller
{
    //

    public $item;

    public function __construct(ItemRepositoryInterface $item){
        $this->item=$item;
    }

    public function getItems($items,$sorting){
        switch ($sorting) {
            case 'id':
            return $items->latest('id');
            break;

            case 'price_high':
            return $items->orderBy('normal_price','DESC');
            break;

            case 'price_low':
            return $items->orderBy('normal_price','ASC');
            break;

            case 'user_review':
            return  $items->orderBy('average_reviews','DESC');
            break;
            
            default:
            return $items->latest('id');
            break;
        }
    }

    private function validateData(){
        return [
            'sorting' => 'required|in:id,price_high,price_low,user_review',
            'showing' => 'required|in:9,12,18',
            'min_price' => 'nullable|integer',
            'max_price' => 'nullable|integer'
        ];
    }

    public function shop(Request $request){

        $request->validate($this->validateData());
        // $validator=$this->makeValidator($this->makeInputData($content,$contentId,$request->search),$this->acceptArray );
        // if($validator->fails()){
        //     return makeErrorMessage($validator->errors());
        // }
        $items=$itemIds=[];

        // if($content!=='all'){
        //     $items=$request->search==NULL ? $this->item->getByContent($content,$contentId) : $this->item->searchByContent($content,$contentId,'%'.$request->search.'%');
        // }


        $items=$this->item->getAll();
        if($request->search!==NULL){
            $items=$items->searchData( '%' . $request->search . '%' );
        }

        if(!empty($items) && $request->categories!==NULL){
            $categories=explode(',', $request->categories);
            $items=$items->whereInSeos('category_id','Category',$categories);
        }

        if(!empty($items) && $request->subcategories!==NULL){
            $subcategories=explode(',', $request->subcategories);
            $items=$items->whereInSeos('subcategory_id','Subcategory',$subcategories);
        }

        if(!empty($items) && $request->brands!==NULL){
            $brands=explode(',', $request->brands);
            $items=$items->whereInSeos('brand_id','Brand',$brands);
        }

        if(!empty($items) &&  $request->colors!==NULL){
            $colors=explode(',',$request->colors);
            $items=$items->whereInColorLinks($colors);
        }

        if(!empty($items) && $request->sets!==NULL){
            $sets=explode(',', $request->sets);
            $items=$items->whereInAttributeSets($sets);
        }

        if(!empty($items) && $request->collections!==NULL){
            $collections=explode(',', $request->collections);
            if(isset($collections[0])){
                $collection=$collections[0];
                $items=$items->whereInCollection($collection);
            }
        }

        if(!empty($items) && $request->min_price!==NULL && $request->max_price==NULL ){
            $items=$items->minPrice($request->min_price);
        }

        if(!empty($items) && $request->min_price==NULL && $request->max_price!==NULL  ){
            $items=$items->maxPrice($request->max_price);
        }

        if(!empty($items) && $request->min_price!==NULL && $request->max_price!==NULL ){
            $items=$items->betweenPrice($request->min_price,$request->max_price);
        }

        if(!empty($items)){
            return response()->json([
                'items' => $this->getItems($items,$request->sorting)->paginate($request->showing)
            ]);
        }
        return dataNotFound();

        // if(!empty($items)){
        //     $itemIds=$items->get()->pluck('id')->toArray();
        //     $items=$this->getItems($items,$request->sorting)->paginate($request->showing);
        // }
        // return response()->json([
        //     'items' => $items ,
        //     'max_price' => $this->item->getMaxPrice($itemIds) ,
        //     'min_price' => $this->item->getMinPrice($itemIds)
        // ]);
    }
}
