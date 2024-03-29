<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{DeleteSearch,SeoTrait};
class Banner extends TransactionModel
{
    use SoftDeletes,DeleteSearch,SeoTrait;

    protected $fillable =[
        'title',
        'pic',
        'content',
        'content_id'
    ];
    protected $dates = ['deleted_at'];

    public static $cacheKey='banners_cache';

    public static function getContents(){
        return [
            'Category',
            'Subcategory',
            'Brand',
            'Promotion'
        ];
    }

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-banners',DateModel::ONE_DAY,function(){
            return self::latest('id')->get();
        });
    }
}
