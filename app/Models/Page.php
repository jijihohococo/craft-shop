<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\{SearchNameTrait,DeleteSearch,SeoTrait};
class Page extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch,SeoTrait;

    protected $fillable=[
        'name',
        'description'
    ];

    public static $cacheKey='pages_cache';

    protected static $tableName='pages';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-pages',DateModel::ONE_DAY,function(){
            return self::select(['id','name'])->orderBy('name')->get();
        });
    }
}
