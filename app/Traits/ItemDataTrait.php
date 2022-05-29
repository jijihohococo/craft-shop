<?php

namespace App\Traits;

trait ItemDataTrait{

	public function scopeSelectItem($query){
		return $query->addSelect(['item_name' => function($query) {
            $query->select('name')
            ->from('items')
            ->whereColumn('item_id','items.id')
            ->limit(1);
        } ]);
	}

	public function scopeOfItem($query,$itemId){
		return $query->where('item_id',$itemId);
	}

}