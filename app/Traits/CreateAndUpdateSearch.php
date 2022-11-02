<?php

namespace App\Traits;


trait CreateAndUpdateSearch{


	public function scopeSearchCreateAndUpdate($query,$searchData){
		return $query->orWhere('created_at','like',$searchData);
	}

	public function scopeSearchWithCreate($query,$searchData){
		return $query->where('created_at','like',$searchData);
	}

}