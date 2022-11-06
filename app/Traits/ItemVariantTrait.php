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

	public function scopeSelectItem($query){
        return $query->addSelect([
            'item_id' => function($query){
                $query->select('item_id')
                ->from('item_variants')
                ->whereColumn('item_variant_id','item_variants.id')
                ->limit(1);
            }
        ]);
    }

}