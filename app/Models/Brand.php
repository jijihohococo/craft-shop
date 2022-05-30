<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
class Brand extends TransactionModel
{
    use HasFactory,SoftDeletes;

    protected $fillable=[
        'name',
        'pic'
    ];

    public static $content='Brand';

    public static $cacheKey='brands_cache';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-brands',60*60*24,function(){
            return self::orderBy('name')->get();
        });
    }
}
