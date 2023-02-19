<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch,SeoTrait};
class Collection extends TransactionModel
{

    use SoftDeletes,SearchNameTrait,DeleteSearch,SeoTrait;

    protected $fillable=[
        'name',
        'pic'
    ];

    public static $cacheKey='collections_cache';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-collections',DateModel::ONE_DAY,function(){
            return self::selectSeoData('Collection')->orderBy('id')->get();
        });
    }

    public function items(){
        return $this->hasMany('App\Models\ItemCollection');
    }
    
}
