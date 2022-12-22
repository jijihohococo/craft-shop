<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch,SeoTrait};
class Brand extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch,SeoTrait;

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

    public function scopeGetByItemData($query,$column,$categoryId){
        return $query->whereIn('id',function($query) use($column,$categoryId) {
            $query->select('brand_id')
            ->from('items')
            ->where($column,$categoryId);
        });
    }

    public function scopeGetByItemSearch($query,$column,$categoryId,$searchData){
        return $query->whereIn('id',
            Item::select('brand_id')
            ->where($column,$categoryId)
            ->searchWithName( $searchData )
            ->searchWithCategory($searchData)
            ->searchWithSubcategory($searchData)
            ->searchWithColor($searchData)
            ->getQuery() );
    }
}
