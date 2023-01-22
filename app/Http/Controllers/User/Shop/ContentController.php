<?php

namespace App\Http\Controllers\User\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\APIValidator;
abstract class ContentController extends Controller
{
    //
    use APIValidator;

    public $content;

    public $acceptArray=[
        'all',
        'category',
        'subcategory',
        'brand'
    ];

    public function getContent($content,$id,$searchData=null){
        return response()->json([
            $this->content .'s' => $this->getContentData($content,$id,$searchData)
        ]);
    }

    public function getContentData($content,$id,$searchData=null){
        if($content=='all'){
            return $searchData==NULL ? $this->{$this->content}->getAll() : $this->{$this->content}->getAllBySearch($searchData);
        }else{
            return $searchData==NULL ? $this->{$this->content}->getByContent($content,$id) :
            $this->{$this->content}->searchByContent($content,$id,$searchData);
        }
    }

    public function makeSearch($searchData=NULL){
        return $searchData!==NULL?'%'.$searchData.'%':NULL;
    }

    public function getDataByContent(Request $request,$content,$contentId=NULL){
        $validator=$this->makeValidator($this->makeInputData($content,$contentId,$request->search),$this->acceptArray);
        if($validator->fails()){
            return makeErrorMessage($validator->errors());
        }
        return $this->getContent($content,$contentId,$this->makeSearch($request->search));
    }
}
