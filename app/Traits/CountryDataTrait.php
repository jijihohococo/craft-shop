<?php

namespace App\Traits;

trait CountryDataTrait{

	public function scopeSelectCountry($query){
        return $query->addSelect(['country_name' => function($query) {
            $query->select('name')
            ->from('countries')
            ->whereColumn('country_id','countries.id')
            ->limit(1);
        } ]);
    }
	
}