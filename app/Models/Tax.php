<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch};
class Tax extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch;

    protected $fillable=[
        'name',
        'rate'
    ];

    public static $cacheKey='taxes_cache';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-taxes',60*60*24,function(){
            return self::latest('name')->get();
        });
    }

    public static function getTaxFromItemPrice($query){
        return $query->select('rate')
        ->from('taxes')
        ->whereColumn('item_prices.tax_id','taxes.id')
        ->limit(1);
    }
    
}
