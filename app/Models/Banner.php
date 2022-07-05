<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
class Banner extends TransactionModel
{
    use HasFactory,SoftDeletes;

    protected $fillable =[
        'title',
        'pic'
    ];
    protected $dates = ['deleted_at'];

    public static $cacheKey='banners_cache';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-banners',60*60*24,function(){
            return self::latest('id')->get();
        });
    }
}
