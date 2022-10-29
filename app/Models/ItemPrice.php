<?php

namespace App\Models;

use App\Traits\{CurrencyDataTrait,ItemVariantTrait};
class ItemPrice extends TransactionModel
{
    use CurrencyDataTrait,ItemVariantTrait;

    protected $fillable=[
        'currency_id',
        'item_variant_id',
        'price',
        'promotion_type',
        'promotion_price',
        'promotion_start_time',
        'promotion_end_time'
    ];
    
    // public const SALE_PRICE_SQL="SUBSTRING_INDEX( GROUP_CONCAT(
    //  ) ,',',1)";
    public const SALE_PRICE_SQL="CASE
    
    WHEN (((item_prices.promotion_start_time <=CURRENT_TIMESTAMP) ||
    (item_prices.promotion_end_time >=CURRENT_TIMESTAMP))&&
    item_prices.promotion_type='Price')  THEN 

    REPLACE(FORMAT(
    (item_prices.price*(SELECT currencies.price FROM currencies WHERE currencies.id=item_prices.currency_id)-item_prices.promotion_price )
     , 2), ',', '')


    WHEN (((item_prices.promotion_start_time <=CURRENT_TIMESTAMP) ||
    (item_prices.promotion_end_time >=CURRENT_TIMESTAMP))&&
    item_prices.promotion_type='Percent') THEN

    
    REPLACE(FORMAT(
        (item_prices.price*(SELECT currencies.price FROM currencies WHERE currencies.id=item_prices.currency_id)-
        (item_prices.price*(SELECT currencies.price FROM currencies WHERE currencies.id=item_prices.currency_id))*
        (item_prices.promotion_price/100)
        )
    , 2), ',', '')

    ELSE
    
    REPLACE(FORMAT(
    item_prices.price*(SELECT currencies.price FROM currencies WHERE currencies.id=item_prices.currency_id)
    , 2), ',', '')
 END";

    // public const NORMAL_PRICE_SQL="SUBSTRING_INDEX( GROUP_CONCAT(
    // item_prices.price ) ,',',1)";

    public const PRICE_SQL="REPLACE(FORMAT(
    item_prices.price*(SELECT currencies.price FROM currencies WHERE currencies.id=item_prices.currency_id)
    , 2), ',', '')
    ";

    public function currency(){
        return $this->belongsTo('App\Models\Currency')->withDefault()->withTrashed();
    }
}
