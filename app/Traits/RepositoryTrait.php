<?php

namespace App\Traits;

trait RepositoryTrait{


	public $content;

	public function getContent($content,$id,$searchData=null){
        return response()->json([
            $this->content .'s' => $searchData==NULL ? $this->{$this->content}->getByContent($content,$id) :
            $this->{$this->content}->searchByContent($content,$id,$searchData)
        ]);
    }

}