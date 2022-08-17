<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,CreateAndUpdateSearch,DeleteSearch};
class Category extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,CreateAndUpdateSearch,DeleteSearch;

    protected $fillable=[
        'name'
    ];
    protected $dates = ['deleted_at'];

    public static $cacheKey='categories_cache';

    public function getWithSubcategories(){
        return Cache::tags(self::$cacheKey)->remember('all-categories',60*60*24,function(){
            return self::addSelect(['subcategories' => function($query){
                $query->select(\DB::raw('GROUP_CONCAT(subcategories.name)'))
                ->from('subcategories')
                ->whereColumn('categories.id','subcategories.category_id')
                ->where('deleted_at',NULL)
                ->groupBy('subcategories.category_id');
            } ])
            ->orderBy('name')
            ->get();
        });
    }
}
