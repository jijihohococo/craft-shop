<?php

namespace App\Traits;

use App\Models\Currency;
trait CurrencyDataTrait{

    public function scopeSelectCurrency($query){
        return $query->addSelect(['currency_name' => function($query) {
            $query->select('name')
            ->from('currencies')
            ->whereColumn('currency_id','currencies.id')
            ->limit(1);
        } , 
        'currency_price' => function($query){
            $query->select('currencies.price')
            ->from('currencies')
            ->whereColumn('currency_id','currencies.id')
            ->limit(1);
        } ]);
    }

    public function scopeSearchWithCurrency($query,$searchData){
        return $query->orWherein('currency_id',
            Currency::select('id')
            ->searchWithName($searchData)
            ->getQuery()
        );
    }

}