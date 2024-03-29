<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch,SeoTrait};
class Promotion extends TransactionModel
{

    use SoftDeletes,SearchNameTrait,DeleteSearch,SeoTrait;

    protected $fillable = [
        'name',
        'promo_code',
        'promotion_start_time',
        'promotion_end_time',
        'banner_id'];

    public static $cacheKey='promotions_cache';

    protected static $tableName='promotions';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-promotions',DateModel::ONE_DAY,function(){
            return self::latest('name')->get();
        });
    }
}
