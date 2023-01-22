<?php

namespace App\Repositories;

use App\Models\Color;
class ColorRepository implements ColorRepositoryInterface{

	public function getByContent($content,$id){
		return Color::getByItemData($content.'_id',$id)->orderBy('name')->get();
	}

	public function searchByContent($content,$id,$searchData){
		return Color::getByItemSearch($content.'_id',$id,$searchData)
		->orderBy('name')
		->get();
	}

	public function getAll(){
		return (new Color)->getAll();
	}

	public function getAllBySearch($searchData){
		return Color::getAllByItemSearch($searchData)
		->orderBy('name')
		->get();
	}

}