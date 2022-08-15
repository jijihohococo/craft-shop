<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{CreateAndUpdateSearch,DeleteSearch};
class Banner extends TransactionModel
{
    use HasFactory,SoftDeletes,CreateAndUpdateSearch,DeleteSearch;

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
        return Cache::tags( self::$cacheKey )->remember('all-banners',60*60*24,function(){
            return self::latest('id')->get();
        });
    }
}
