<?php

namespace App\Models;


use Illuminate\Support\Facades\Cache;
class AttributeSet extends TransactionModel
{

    public static $cacheKey='attribute_sets_cache';

    protected $fillable=[
        'set',
        'attribute_id'
    ];

    public function getByAttributeId($attributeId){
        return Cache::tags( self::$cacheKey )->remember('all-attribute-sets',DateModel::ONE_DAY,function() use($attributeId){
            return self::where('attribute_id',$attributeId)->get();
        });
    }
}
