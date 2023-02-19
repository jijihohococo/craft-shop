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
                ->where('subcategories.deleted_at',NULL)
                ->groupBy('subcategories.category_id');
    }

    public function getWithSubcategories(){
        return Cache::tags(self::$cacheKey)->remember('all-categories',DateModel::ONE_DAY,function(){
            return self::selectSeoData('Category')
            ->addSelect(['subcategories' => function($query){
                self::getSubcategories($query,'name');
            } ,
            'subcategory_ids' => function($query){
                self::getSubcategories($query,'id');
            },
            'subcategory_links' => function($query){
                $query->select(
                    \DB::raw('GROUP_CONCAT(seos.page_link)')
                )
                ->from('subcategories')
                ->join('seos', 'seos.model_id', '=', 'subcategories.id')
                ->where('seos.model','=','Subcategory')
                ->whereColumn('categories.id','subcategories.category_id')
                ->where('subcategories.deleted_at',NULL)
                ->groupBy('subcategories.category_id');
            }  ])
            ->orderBy('id')
            ->get();
        });
    }
}
