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
            return self::select(['id','name','pic'])
            ->selectSeoData('Brand')
            ->orderBy('name')->get();
        });
    }

    public function scopeGetByItemData($query,$column,$link){
        return $query->whereIn('id',Item::select('brand_id')
            ->whereLink($column,$link)
            ->getQuery()
        );
    }

    public function scopeGetByItemSearch($query,$column,$link,$searchData){
        return $query->whereIn('id',
            Item::select('brand_id')
            ->whereLink($column,$link)
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
