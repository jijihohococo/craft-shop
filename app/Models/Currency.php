<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
class Currency extends TransactionModel
{
    use HasFactory,SoftDeletes;

    protected $fillable=[
        'name',
        'price'
    ];

    public static $cacheKey='currencies_cache';

    public static $content='Currency';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-currencies',60*60*24,function(){
            return self::latest('name')->get();
        });
    }
}
