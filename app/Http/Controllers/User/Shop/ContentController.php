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
        'collection',
        'category',
        'subcategory',
        'brand'
    ];

    public function getContent($content,$link,$searchData=null){
        return response()->json([
            $this->content .'s' => $this->getContentData($content,$link,$searchData)
        ]);
    }

    public function getContentData($content,$link,$searchData=null){
        switch($content){
            case 'all':
            return $searchData==NULL ? $this->{$this->content}->getAll() : $this->{$this->content}->getAllBySearch($searchData);
            break;

            case 'collection':
            return $this->{$this->content}->getByCollection($link);
            break;

            default:
            return $searchData==NULL ? $this->{$this->content}->getByContent($content,$link) :
            $this->{$this->content}->searchByContent($content,$link,$searchData);
            break;
        }
    }

    public function makeSearch($searchData=NULL){
        return $searchData!==NULL?'%'.$searchData.'%':NULL;
    }

    public function getDataByContent(Request $request,$content,$link=NULL){
        $validator=$this->makeValidator($this->makeInputData($content,$link,$request->search),$this->acceptArray);
        if($validator->fails()){
            return makeErrorMessage($validator->errors());
        }
        return $this->getContent($content,$link,$this->makeSearch($request->search));
    }
}
