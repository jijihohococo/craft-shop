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

}