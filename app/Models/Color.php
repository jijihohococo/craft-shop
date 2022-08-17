<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,CreateAndUpdateSearch,DeleteSearch};
class Color extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,CreateAndUpdateSearch,DeleteSearch;

    protected $fillable=[
        'name',
        'color_code'
    ];

    public static $cacheKey='colors_cache';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-colors',60*60*24,function(){
            return self::latest('name')->get();
        });
    }
}
