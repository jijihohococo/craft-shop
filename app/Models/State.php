<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch,CountryDataTrait};

class State extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch,CountryDataTrait;

    protected $fillable =[
        'name',
        'country_id'
    ];

    public static $cacheKey='states_cache';

    public function getByCountryId($countryId){
        return Cache::tags( self::$cacheKey )->remember('states-by-country',60*60*24,function() use ($countryId) {
            return self::where('country_id',$countryId)
            ->latest('name')
            ->get();
        });
    }

}
