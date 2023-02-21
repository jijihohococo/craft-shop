<?php

namespace App\Repositories;

use App\Models\Attribute;
use App\Http\Resources\AttributeResource;
class AttributeRepository implements AttributeRepositoryInterface{

	public function getByContent($content,$link){
		return AttributeResource::collection(Attribute::
			selectSeoData('Attribute')
			->getByItemData($content.'_id',$link)->orderBy('name')->get());
	}

	public function getByCollection($link){
		return AttributeResource::collection(Attribute::selectSeoData('Attribute')
			->getByCollectionData($link)
			->orderBy('name')
			->get());
	}

	public function searchByContent($content,$link,$searchData){
		return AttributeResource::collection(Attribute::
			selectSeoData('Attribute')
			->getByItemSearch($content.'_id',$link,$searchData)->orderBy('name')->get());
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