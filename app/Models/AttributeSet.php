<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Cache;
class AttributeSet extends TransactionModel
{
    use HasFactory;

    public static $cacheKey='attribute_sets_cache';

    protected $fillable=[
        'set',
        'attribute_id'
    ];

    public function getByAttributeId($attributeId){
        return Cache::tags( self::$cacheKey )->remember('all-attribute-sets',60*60*24,function() use($attributeId){
            return self::where('attribute_id',$attributeId)->get();
        });
    }
}
