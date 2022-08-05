<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\SearchNameTrait;
class Brand extends TransactionModel
{
    use HasFactory,SoftDeletes,SearchNameTrait;

    protected $fillable=[
        'name',
        'pic'
    ];

    public static $cacheKey='brands_cache';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-brands',60*60*24,function(){
            return self::orderBy('name')->get();
        });
    }
}
