<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,CreateAndUpdateSearch,DeleteSearch};
class Currency extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,CreateAndUpdateSearch,DeleteSearch;

    protected $fillable=[
        'name',
        'price'
    ];

    public static $cacheKey='currencies_cache';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-currencies',60*60*24,function(){
            return self::latest('name')->get();
        });
    }
}
