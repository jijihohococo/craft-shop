<?php

namespace App\Traits;


trait CreateAndUpdateSearch{


	public function scopeSearchCreateAndUpdate($query,$searchData){
		return $query->orWhere('created_at','like',$searchData)
		->orWhere('updated_at','like',$searchData);
	}

}