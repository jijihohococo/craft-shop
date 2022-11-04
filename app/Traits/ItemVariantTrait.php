<?php

namespace App\Traits;

trait ItemVariantTrait{

	public function scopeOfItemVariant($query,$itemVariantId){
		return $query->where('item_variant_id',$itemVariantId);
	}

	public static function getIdsBySearchCreate($itemVariantId,$searchData){
		$newSearchResult=self::
		ofItemVariant($itemVariantId)
		->latest('id')
		->get();
		$ids=[];
		foreach($newSearchResult as $result){
			if(strpos($result->created_at, $searchData) !== false){
				$ids[]=$result->id;
			}
		}
		return $ids;
	}

}