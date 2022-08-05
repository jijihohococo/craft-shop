<?php

namespace App\Traits;

trait SearchNameTrait{

	public function scopeSearchWithName($query,$searchData){
		return $query->where('name','like',$searchData);
	}

}