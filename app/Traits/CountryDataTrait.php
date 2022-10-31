<?php

namespace App\Traits;

use App\Models\Country;
trait CountryDataTrait{

	public function scopeSelectCountry($query){
        return $query->addSelect(['country_name' => function($query) {
            $query->select('name')
            ->from('countries')
            ->whereColumn('country_id','countries.id')
            ->limit(1);
        } ]);
    }

    public function scopeSearchWithCountry($query,$searchData){
        return $query->orWherein('country_id',Country::select('id')
        ->searchWithName($searchData)->getQuery() );
    }
	
}