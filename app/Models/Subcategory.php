<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{CategoryDataTrait,SearchNameTrait};
class Subcategory extends TransactionModel
{
    use HasFactory,SoftDeletes,CategoryDataTrait,SearchNameTrait;

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
}
