<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch,CategoryDataTrait,SubcategoryDataTrait,ColorDataTrait,BrandDataTrait,SeoTrait};
class Attribute extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch,CategoryDataTrait,SubcategoryDataTrait,ColorDataTrait,BrandDataTrait,SeoTrait;

    protected $fillable=[
        'name'
    ];

    public static $cacheKey='attributes_cache';

    protected static $tableName='attributes';

    public function sets(){
        return $this->hasMany('App\Models\AttributeSet');
    }

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-attributes',DateModel::ONE_DAY,function(){
            return self::selectSeoData('Attribute')
            ->latest('name')
            ->get();
        });
    }

    public function scopeGetByCollectionData($query,$link){
        return $query->whereIn('id',function($query) use($link) {
            $query->select('attribute_id')
            ->from('item_attributes')
            ->whereIn('item_id', Item::getDataByCollection('id',$link) );
        });
    }

    public function scopeGetByItemData($query,$column,$link){
        return $query->whereIn('id',function($query) use($column,$link) {
            $query->select('attribute_id')
            ->from('item_attributes')
            ->whereIn('item_id',
                Item::select('id')
                ->whereLink($column,$link)
                ->getQuery());
        });
    }

    public function scopeGetByItemSearch($query,$column,$link,$searchData){
        return $query->searchWithName($searchData)
        ->orWhereIn('id',function($query) use($column,$link,$searchData) {
            $query->select('attribute_id')
            ->from('item_attributes')
            ->whereIn('item_id',Item::select('id')
                ->whereLink($column,$link)
                ->searchData($searchData)
                ->getQuery());
        })->orWhereIn('id',function($query) use($searchData) {
            $query->select('attribute_id')
            ->from('attribute_sets')
            ->where('set','like',$searchData);
        });
    }

    public function scopeGetAllByItemSearch($query,$searchData){
        return $query->searchWithName($searchData)
        ->orWhereIn('id',function($query) use($searchData) {
            $query->select('attribute_id')
            ->from('item_attributes')
            ->whereIn('item_id',Item::select('id')
                ->searchData($searchData)
                ->getQuery());
        })->orWhereIn('id',function($query) use($searchData) {
            $query->select('attribute_id')
            ->from('attribute_sets')
            ->where('set','like',$searchData);
        });
    }
}
