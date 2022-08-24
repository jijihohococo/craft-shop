<?php

namespace App\Http\Controllers\User\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\ItemRepositoryInterface;
use Validator;
class ItemController extends Controller
{
    //

    public $item;

    public function __construct(ItemRepositoryInterface $item){
        $this->item=$item;
    }

    public function shop(Request $request,$content,$contentId=null){
        $inputData=[
            'content' => $content ,
            'contentId' => $contentId ,
            'search' => $request->search ,
        ];
        $validator=Validator::make( $inputData ,  [
            'content' => 'in:'.implode(',', $this->item->getFilterContents() ) ,
            'contentId' => ['nullable','integer']
        ]);
        if ($validator->fails() ) {
            return response()->json([
                'message' => 'error'
            ]);
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
