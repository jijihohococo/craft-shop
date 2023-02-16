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

    protected static $tableName='brands';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-brands',DateModel::ONE_DAY,function(){
            return self::select(['id','name','pic'])->orderBy('name')->get();
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

    public function scopeGetAllByItemSearch($query,$searchData){
        return $query->whereIn('id',
            Item::select('brand_id')
            ->searchWithName( $searchData )
            ->searchWithCategory($searchData)
            ->searchWithSubcategory($searchData)
            ->searchWithColor($searchData)
            ->getQuery() );
    }
}
