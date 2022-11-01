<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{CategoryDataTrait,SearchNameTrait,DeleteSearch};
class Subcategory extends TransactionModel
{
    use SoftDeletes,CategoryDataTrait,SearchNameTrait,DeleteSearch;

    protected $fillable = [
        'category_id',
        'name'];

        protected $dates = ['deleted_at'];

        public static $cacheKey='subcategories_cache';

        public function getAll(){
            return Cache::tags( self::$cacheKey )->remember('all-subcategories',60*60*24,function(){
                return self::orderBy('name')->get();
            });
        }

        public function getByCategoryId($categoryId){
            return Cache::tags( self::$cacheKey )->remember('subcategories-by-category',60*60*24,function() use ($categoryId) {
                return self::where('category_id',$categoryId)
                ->latest('name')
                ->get();
            });
        }

        public static function searchTrash($items,$searchData){
            return !empty($items->items()) ? $items :
            self::selectCategory()
            ->onlyTrashed()
            ->where('created_at','like',$searchData)
            ->latest('id')
            ->paginate(10);
        }
    }
