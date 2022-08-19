<?php

namespace App\Traits;

trait SearchEmailTrait{


	public function scopeSearchWithEmail($query,$searchData){
		return $query->orWhere('email','like',$searchData);
	}

}