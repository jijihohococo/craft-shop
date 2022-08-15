<?php

namespace App\Traits;


trait DeleteSearch{


	public function scopeSearchDelete($query,$searchData){
		return $query->orWhere('deleted_at','like',$searchData);
	}

}