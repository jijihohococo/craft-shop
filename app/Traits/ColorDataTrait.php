<?php

namespace App\Traits;

use App\Models\Color;
trait ColorDataTrait{
	
	public function scopeSearchWithColor($query,$searchData){
        return $query->orWherein('id',function($query) use($searchData){
            $query->select('id')
            ->from('item_variants')
            ->whereIn('item_variants.color_id',
                Color::select('id')->searchWithName($searchData)->getQuery());
        });
    }

}