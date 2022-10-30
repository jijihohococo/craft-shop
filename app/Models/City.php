<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch,CountryDataTrait};
class City extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch,CountryDataTrait;

    protected $fillable=[
        'name',
        'state_id',
        'country_id',
        'currency_id',
        'delivery_price'
    ];

    public static $cacheKey='cities_cache';

    public function scopeSelectState($query){
        return $query->addSelect(['state_name' => function($query) {
            $query->select('name')
            ->from('states')
            ->whereColumn('state_id','states.id')
            ->limit(1);
        } ]);
    }

    public function getByStateAndCountry($stateId,$countryId){
        return Cache::tags( self::$cacheKey )->remember(
            'cities-by-state-country',60*60*24,function() use ($stateId,
            $countryId) {
            return self::where('country_id',$countryId)
            ->where('state_id',$stateId)
            ->latest('name')
            ->get();
        });
    }
}
