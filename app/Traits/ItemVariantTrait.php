<?php

namespace App\Traits;

trait ItemVariantTrait{

	public function scopeOfItemVariant($query,$itemVariantId){
		return $query->where('item_variant_id',$itemVariantId);
	}

}