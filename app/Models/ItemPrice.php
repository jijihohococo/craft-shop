<?php

namespace App\Models;


class ItemPrice extends TransactionModel
{

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
}
