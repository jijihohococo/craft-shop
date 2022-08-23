<?php

namespace App\Traits;

use App\Models\Brand;
trait BrandDataTrait{

	public function scopeSearchWithBrand($query,$searchData){
        return $query->orWherein('brand_id',Brand::select('id')->searchWithName($searchData)->getQuery());
    }

    public function scopeSelectBrand($query){
        return $query->addSelect(['brand_name' => function($query) {
            $query->select('name')
            ->from('brands')
            ->whereColumn('brand_id','brands.id')
            ->limit(1);
        } ]); 
    }

    public function scopeWhereInBrandIds($query,$brandIds){
        return $query->whereIn('brand_id',$brandIds);
    }


}