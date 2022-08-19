<?php

namespace App\Repositories;

use App\Models\Attribute;
use App\Http\Resources\AttributeResource;
class AttributeRepository implements AttributeRepositoryInterface{

	public function getByContent($content,$id){
		return AttributeResource::collection(Attribute::getByItemData($content.'_id',$id)->orderBy('name')->get());
	}

	public function searchByContent($content,$id,$searchData){
		return AttributeResource::collection(Attribute::getByItemSearch($column.'_id',$id,$searchData)->orderBy('name')->get());
	}

}