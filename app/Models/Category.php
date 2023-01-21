<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch,SeoTrait};
class Category extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch,SeoTrait;

    protected $fillable=[
        'name'
    ];
    protected $dates = ['deleted_at'];

    public static $cacheKey='categories_cache';

    protected static $tableName='categories';

    protected static function getSubcategories($query,$column){
        return $query->select(\DB::raw('GROUP_CONCAT(subcategories.'.$column.')'))
                ->from('subcategories')
                ->whereColumn('categories.id','subcategories.category_id')
                ->where('deleted_at',NULL)
                ->groupBy('subcategories.category_id');
    }

    public function getWithSubcategories(){
        return Cache::tags(self::$cacheKey)->remember('all-categories',DateModel::ONE_DAY,function(){
            return self::addSelect(['subcategories' => function($query){
                self::getSubcategories($query,'name');
            } ,
            'subcategory_ids' => function($query){
                self::getSubcategories($query,'id');
            } ])
            ->orderBy('id')
            ->get();
        });
    }
}
