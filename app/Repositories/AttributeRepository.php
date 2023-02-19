<?php

namespace App\Repositories;

use App\Models\Attribute;
use App\Http\Resources\AttributeResource;
class AttributeRepository implements AttributeRepositoryInterface{

	public function getByContent($content,$id){
		return AttributeResource::collection(Attribute::
			selectSeoData('Attribute')
			->getByItemData($content.'_id',$id)->orderBy('name')->get());
	}

	public function searchByContent($content,$id,$searchData){
		return AttributeResource::collection(Attribute::
			selectSeoData('Attribute')
			->getByItemSearch($content.'_id',$id,$searchData)->orderBy('name')->get());
	}

	public function getAll(){
		return AttributeResource::collection((new Attribute)->getAll());
	}

	public function getAllBySearch($searchData){
		return AttributeResource::collection(
			Attribute::selectSeoData('Attribute')
			->getAllByItemSearch($searchData)
			->orderBy('name')
			->get()
		);
	}

}