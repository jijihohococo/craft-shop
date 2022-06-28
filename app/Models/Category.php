<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
class Category extends TransactionModel
{
    use HasFactory,SoftDeletes;

    protected $fillable=[
        'name'
    ];
    protected $dates = ['deleted_at'];

    public static $content="Category";

    public static $cacheKey='categories_cache';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-categories',60*60*24,function(){
            return self::orderBy('name')->get();
        });
    }

    public function getWithSubcategories(){
        return Cache::tags(self::$cacheKey)->remember('all-categories',60*60*24,function(){
            return self::addSelect(['subcategories' => function($query){
                $query->select(\DB::raw('GROUP_CONCAT(subcategories.name)'))
                ->from('subcategories')
                ->whereColumn('categories.id','subcategories.category_id')
                ->groupBy('subcategories.category_id');
            } ])
            ->orderBy('name')
            ->get();
        });
    }
}
