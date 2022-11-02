<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch,StateDataTrait,CountryDataTrait};
class City extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch,StateDataTrait,CountryDataTrait;

    protected $fillable=[
        'name',
        'state_id',
        'country_id',
        'currency_id',
        'delivery_price'
    ];

    public static $cacheKey='cities_cache';

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

    public function scopeSearchData($query,$searchData){
        return $query->searchWithName($searchData)
        ->searchWithState($searchData)
        ->searchWithCountry($searchData);
    }

    public function scopeTrashSearchData($query,$searchData){
        return $query->searchWithCreate($searchData)
        ->trashSearchWithName($searchData)
        ->searchWithState($searchData)
        ->searchWithCountry($searchData);
    }
}
