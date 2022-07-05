<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
class Attribute extends TransactionModel
{
    use HasFactory,SoftDeletes;

    protected $fillable=[
        'name'
    ];

    public static $cacheKey='attributes_cache';

    public function sets(){
        return $this->hasMany('App\Models\AttributeSet');
    }

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-attributes',60*60*24,function(){
            return self::latest('name')->get();
        });
    }
}
