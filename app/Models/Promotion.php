<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch};
class Promotion extends TransactionModel
{

    use SoftDeletes,SearchNameTrait,DeleteSearch;

    protected $fillable = [
        'name',
        'promo_code',
        'promotion_start_time',
        'promotion_end_time',
        'banner_id'];

    public static $cacheKey='promotions_cache';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-promotions',60*60*24,function(){
            return self::latest('name')->get();
        });
    }
}
