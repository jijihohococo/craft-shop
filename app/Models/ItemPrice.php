<?php

namespace App\Models;

use App\Traits\CurrencyDataTrait;
class ItemPrice extends TransactionModel
{
    use CurrencyDataTrait;

    protected $fillable=[
        'currency_id',
        'tax_id',
        'item_variant_id',
        'price',
        'promotion_type',
        'promotion_price',
        'promotion_start_time',
        'promotion_end_time'
    ];

    public const SALE_PRICE_SQL="SUBSTRING_INDEX( GROUP_CONCAT(
                    CASE
                    WHEN item_prices.promotion_start_time <=NOW() THEN promotion_price*(SELECT currencies.price FROM currencies WHERE currencies.id=item_prices.currency_id)
                    WHEN item_prices.promotion_end_time >=NOW() THEN promotion_price*(SELECT currencies.price FROM currencies WHERE currencies.id=item_prices.currency_id)
                    ELSE item_prices.price*(SELECT currencies.price FROM currencies WHERE currencies.id=item_prices.currency_id) END ) ,',',1)";

    public const NORMAL_PRICE_SQL="SUBSTRING_INDEX( GROUP_CONCAT(
                    item_prices.price*(SELECT currencies.price FROM currencies WHERE currencies.id=item_prices.currency_id) ) ,',',1)";

    public function currency(){
        return $this->belongsTo('App\Models\Currency')->withDefault()->withTrashed();
    }

    public function scopeSelectTax($query){
        return $query->addSelect(['tax_rate' => function($query) {
            $query->select('rate')
            ->from('taxes')
            ->whereColumn('tax_id','taxes.id')
            ->limit(1);
        } ,
        'tax_name' => function($query){
            $query->select('name')
            ->from('taxes')
            ->whereColumn('tax_id','taxes.id')
            ->limit(1);
        } ]);
    }

    public function scopeSearchWithTax($query,$searchData){
        return $query->orWherein('tax_id',function($query) use ($searchData) {
            $query->select('id')
            ->from('taxes')
            ->where('name','like',$searchData);
        });
    }
}
