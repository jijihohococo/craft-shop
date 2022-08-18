<?php

namespace App\Repositories;

use App\Models\Brand;
class BrandRepository implements BrandRepositoryInterface{


	public function getByContent($content,$id){
		return Brand::getByItemData($content.'_id',$id)
            ->latest('name')
            ->get();
	}

}