<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch,CategoryDataTrait,SubcategoryDataTrait,ColorDataTrait,BrandDataTrait};
class Attribute extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch,CategoryDataTrait,SubcategoryDataTrait,ColorDataTrait,BrandDataTrait;

    protected $fillable=[
        'name'
    ];

    public static $cacheKey='attributes_cache';

    public function sets(){
        return $this->hasMany('App\Models\AttributeSet');
    }

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-attributes',DateModel::ONE_DAY,function(){
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

    public function scopeGetByItemSearch($query,$column,$id,$searchData){
        return $query->searchWithName($searchData)
        ->orWhereIn('id',function($query) use($column,$id,$searchData) {
            $query->select('attribute_id')
            ->from('item_attributes')
            ->whereIn('item_id',Item::select('id')
                ->where($column,$id)
                ->searchData($searchData)
                ->getQuery());
        })->orWhereIn('id',function($query) use($searchData) {
            $query->select('attribute_id')
            ->from('attribute_sets')
            ->where('set','like',$searchData);
        });
    }
}
