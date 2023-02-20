<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch,SeoTrait};
class Color extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch,SeoTrait;

    protected $fillable=[
        'name',
        'color_code'
    ];

    public static $tableName='colors';

    public static $cacheKey='colors_cache';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-colors',DateModel::ONE_DAY,function(){
            return self::selectSeoData('Color')->orderBy('name','ASC')->get();
        });
    }

    public function scopeGetByCollectionData($query,$link){
        return $query->whereIn('id',function($query) use($link){
            $query->select('color_id')
            ->from('item_variants')
            ->whereIn('item_id',
                Item::getDataByCollection('id',$link) );
        });
    }

    public function scopeGetByItemData($query,$column,$link){
        return $query->whereIn('id',function($query) use($column,$link){
            $query->select('color_id')
            ->from('item_variants')
            ->whereIn('item_id',
                Item::select('id')
                ->whereLink($column,$link)
                ->getQuery());
        });
    }

    public function scopeGetByItemSearch($query,$column,$link,$searchData){
        return $query->searchWithName($searchData)
        ->orWhereIn('id',function($query) use($column,$link,$searchData) {
            $query->select('color_id')
            ->from('item_variants')
            ->whereIn('item_id',Item::select('id')
                ->whereLink($column,$link)
                ->searchWithName( $searchData )
                ->searchWithCategory($searchData)
                ->searchWithSubcategory($searchData)
                ->searchWithBrand($searchData)
                ->getQuery());
        });
    }

    public function scopeGetAllByItemSearch($query,$searchData){
        return $query->searchWithName($searchData)
        ->orWhereIn('id',function($query) use($searchData){
            $query->select('color_id')
            ->from('item_variants')
            ->whereIn('item_id',Item::select('id')
                ->searchWithName( $searchData )
                ->searchWithCategory($searchData)
                ->searchWithSubcategory($searchData)
                ->searchWithBrand($searchData)
                ->getQuery() );
        } );
    }
}
