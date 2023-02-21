<?php

namespace App\Traits;
use App\Models\Item;
trait ItemDataTrait{

	public function scopeSelectItem($query){
		return $query->addSelect(['item_name' => function($query) {
			$query->select('name')
			->from('items')
			->whereColumn('item_id','items.id')
			->limit(1);
		} ,
		'item_link' => function($query){
			$query->select('seos.page_link')
			->from('items')
			->join('seos', 'seos.model_id', '=', 'items.id')
			->where('seos.model','=','Item')
			->whereColumn('item_id','items.id')
			->limit(1);
		},
		'item_image' => function($query){
			$query->selectSub(function($query){
				Item::selectImage($query);
			},'image')
			->from('items')
			->whereColumn('item_id','items.id')
			->limit(1);
		} ]);
	}

	public function scopeOfItem($query,$itemId){
		return $query->where('item_id',$itemId);
	}

}