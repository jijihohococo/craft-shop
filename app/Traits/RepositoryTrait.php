<?php

namespace App\Traits;

trait RepositoryTrait{

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

    public function makeContent($content,$contentId,$search){
        $validator=$this->makeValidator($this->makeInputData($content,$contentId,$search),$this->acceptArray);
        if($validator->fails()){
            return $this->makeErrorMessage($validator);
        }
        return $this->getContent($content,$contentId,$this->makeSearch($search));
    }

}