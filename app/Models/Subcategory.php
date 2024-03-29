<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{CategoryDataTrait,SearchNameTrait,DeleteSearch,SeoTrait};
class Subcategory extends TransactionModel
{
    use SoftDeletes,CategoryDataTrait,SearchNameTrait,DeleteSearch,SeoTrait;

    protected $fillable = [
        'category_id',
        'name'];

        protected $dates = ['deleted_at'];

        public static $cacheKey='subcategories_cache';

        protected static $tableName='subcategories';

        public function getAll(){
            return Cache::tags( self::$cacheKey )->remember('all-subcategories',DateModel::ONE_DAY,function(){
                return self::orderBy('name')->get();
            });
        }

        public function getByCategoryId($categoryId){
            return Cache::tags( self::$cacheKey )->remember('subcategories-by-category',DateModel::ONE_DAY,function() use ($categoryId) {
                return self::where('category_id',$categoryId)
                ->latest('name')
                ->get();
            });
        }
    }
