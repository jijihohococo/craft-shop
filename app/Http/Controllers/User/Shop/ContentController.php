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

    public function getContent($content,$id,$searchData=null){
        return response()->json([
            $this->content .'s' => $searchData==NULL ? $this->{$this->content}->getByContent($content,$id) :
            $this->{$this->content}->searchByContent($content,$id,$searchData)
        ]);
    }

    public function makeSearch($searchData=NULL){
        return $searchData!==NULL?'%'.$searchData.'%':NULL;
    }

    public function getDataByContent(Request $request,$content,$contentId){
        $validator=$this->makeValidator($this->makeInputData($content,$contentId,$request->search),$this->acceptArray);
        if($validator->fails()){
            return $this->makeErrorMessage($validator);
        }
        return $this->getContent($content,$contentId,$this->makeSearch($request->search));
    }
}
