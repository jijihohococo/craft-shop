<?php

namespace App\Traits;

trait ColorDataTrait{

	use SearchNameTrait;
	
	public function scopeSearchWithColor($query,$searchData){
        $that=$this;
        return $query->orWherein('id',function($query) use($searchData,$that){
            $query->select('id')
            ->from('item_variants')
            ->whereIn('item_variants.color_id',function($query) use($searchData,$that){
                $that->scopeSearchWithName(
                $query->select('id')
                ->from('colors') ,
                $searchData );
            });
        });
    }

}