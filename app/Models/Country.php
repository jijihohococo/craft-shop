<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch};
class Country extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch;

    protected $fillable =[
        'name',
        'code'
    ];

    public static $cacheKey='countries_cache';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-countries',60*60*24,function(){
            return self::latest('id')->get();
        });
    }
}
