<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch};
class Color extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch;

    protected $fillable=[
        'name',
        'color_code'
    ];

    public static $cacheKey='colors_cache';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-colors',DateModel::ONE_DAY,function(){
            return self::orderBy('name','ASC')->get();
        });
    }

    public function scopeGetByItemData($query,$column,$id){
        return $query->whereIn('id',function($query) use($column,$id){
            $query->select('color_id')
            ->from('item_variants')
            ->whereIn('item_id',function($query) use($column,$id) {
                $query->select('id')
                ->from('items')
                ->where($column,$id);
            });
        });
    }

    public function scopeGetByItemSearch($query,$column,$id,$searchData){
        return $query->searchWithName($searchData)
        ->orWhereIn('id',function($query) use($column,$id,$searchData) {
            $query->select('color_id')
            ->from('item_variants')
            ->whereIn('item_id',Item::select('id')
                ->where($column,$id)
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
