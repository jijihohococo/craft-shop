<?php

namespace App\Traits;

trait CurrencyDataTrait{

    public function scopeSelectCurrency($query){
        return $query->addSelect(['currency_name' => function($query) {
            $query->select('name')
            ->from('currencies')
            ->whereColumn('currency_id','currencies.id')
            ->limit(1);
        } ]);
    }

    public function scopeSearchWithCurrency($query,$searchData){
        return $query->orWherein('currency_id',
            function($query) use($searchData) {
                $query->select('id')
                ->from('currencies')
                ->where('name','like', $searchData );
            }
        );
    }

}