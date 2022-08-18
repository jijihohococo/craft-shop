<?php

namespace App\Traits;


trait BrandDataTrait{

	use SearchNameTrait;

	public function scopeSearchWithBrand($query,$searchData){
        $that=$this;
        return $query->orWherein('brand_id',
            function($query) use($searchData,$that){
                $that->scopeSearchWithName(
                    $query->select('id')
                    ->from('brands') ,
                    $searchData
                );
            });
    }

    public function scopeSelectBrand($query){
        return $query->addSelect(['brand_name' => function($query) {
            $query->select('name')
            ->from('brands')
            ->whereColumn('brand_id','brands.id')
            ->limit(1);
        } ]); 
    }


}