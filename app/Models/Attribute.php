<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,CreateAndUpdateSearch,DeleteSearch};
class Attribute extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,CreateAndUpdateSearch,DeleteSearch;

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

    public function scopeGetByItemData($query,$column,$id){
        return $query->whereIn('id',function($query) use($column,$id) {
            $query->select('attribute_id')
            ->from('item_attributes')
            ->whereIn('item_id',function($query) use($column,$id) {
                $query->select('id')
                ->from('items')
                ->where($column,$id);
            });
        });
    }
}
