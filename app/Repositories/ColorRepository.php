<?php

namespace App\Repositories;

use App\Models\Color;
class ColorRepository implements ColorRepositoryInterface{

	public function getByContent($content,$id){
		return Color::getByItemData($content,$id)->orderBy('name')->get();
	}

	public function searchByContent($content,$id,$searchData){
		return Color::getByItemSearch($content,$id,$searchData)
		->orderBy('name')
		->get();
	}

}