<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch};
class Collection extends TransactionModel
{

    use SoftDeletes,SearchNameTrait,DeleteSearch;

    protected $fillable=[
        'name',
        'pic'
    ];

    public static $cacheKey='collections_cache';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-collections',60*60*24,function(){
            return self::orderBy('id')->get();
        });
    }

    public function items(){
        return $this->hasMany('App\Models\ItemCollection');
    }
    
}
