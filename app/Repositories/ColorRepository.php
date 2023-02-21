<?php

namespace App\Repositories;

use App\Models\Color;
class ColorRepository implements ColorRepositoryInterface{

	public function getByContent($content,$link){
		return Color::selectSeoData('Color')
		->getByItemData($content.'_id',$link)
		->orderBy('name')
		->get();
	}

	public function getByCollection($link){
		return Color::selectSeoData('Color')
		->getByCollectionData($link)
		->orderBy('name')
		->get();
	}

	public function searchByContent($content,$link,$searchData){
		return Color::selectSeoData('Color')
		->getByItemSearch($content.'_id',$link,$searchData)
		->orderBy('name')
		->get();
	}

	public function getAll(){
		return (new Color)->getAll();
	}

	public function getAllBySearch($searchData){
		return Color::selectSeoData('Color')
		->getAllByItemSearch($searchData)
		->orderBy('name')
		->get();
	}

}