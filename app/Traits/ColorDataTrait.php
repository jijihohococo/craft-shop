<?php

namespace App\Traits;

use App\Models\Color;
trait ColorDataTrait{

	public function scopeSearchWithColor($query,$searchData){
        return $query->orWherein('id',function($query) use($searchData){
            $query->select('item_id')
            ->from('item_variants')
            ->whereIn('item_variants.color_id',
                Color::select('id')->searchWithName($searchData)->getQuery());
        });
    }

    public function scopeWhereInColorLinks($query,$links){
        return $query->whereIn('id',function($query) use($links){
            $query->select('item_id')
            ->from('item_variants')
            ->whereIn('item_variants.color_id',function($query) use($links) {
                $query->select('seos.model_id')
                ->from('seos')
                ->where('seos.model','Color')
                ->whereIn('seos.page_link',$links);
            } );
        } );
    }

}