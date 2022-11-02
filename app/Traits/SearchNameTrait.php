<?php

namespace App\Traits;

trait SearchNameTrait{

	public function scopeSearchWithName($query,$searchData){
		return $query->where('name','like',$searchData);
	}

	public function scopeTrashSearchWithName($query,$searchData){
		return $query->orWhere('name','like',$searchData);
	}

}