<?php

namespace App\Repositories;

use App\Models\Brand;
class BrandRepository implements BrandRepositoryInterface{


	public function getByContent($content,$id){
		return Brand::selectSeoData('Brand')
		->getByItemData($content.'_id',$id)
		->latest('name')
		->get();
	}

	public function getByCollection($link){
		return Brand::selectSeoData('Brand')
		->getByCollectionData($link)
		->latest('name')
		->get();
	}

	public function searchByContent($content,$id,$searchData){
		return Brand::selectSeoData('Brand')
		->getByItemSearch($content.'_id',$id,$searchData)
		->latest('name')
		->get();
	}

	public function getAll(){
		return (new Brand)->getAll();
	}

	public function getAllBySearch($searchData){
		return Brand::selectSeoData('Brand')
		->getAllByItemSearch($searchData)
		->latest('name')
		->get();
	}

}