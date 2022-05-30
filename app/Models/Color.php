<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
class Color extends TransactionModel
{
    use HasFactory,SoftDeletes;

    protected $fillable=[
        'name',
        'color_code'
    ];

    public static $cacheKey='colors_cache';

    public static $content='Color';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-colors',60*60*24,function(){
            return self::latest('name')->get();
        });
    }
}
