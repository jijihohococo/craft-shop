<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,CreateAndUpdateSearch,DeleteSearch};
class Permission extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,CreateAndUpdateSearch,DeleteSearch;

    protected $fillable = [
        'name',
        'model',
        'create',
        'read',
        'update',
        'delete'];

    public static function getModels(){
        return [
            'Permission',
            'Shop',
            'Admin',
            'Banner',
            'Category',
            'Subcategory',
            'Brand',
            'Item',
            'Role',
            'Target',
            'User',
            'Currency',
            'Tax',
            'Attribute',
            'Color'
        ];
    }

    public static function getActions(){
        return [
            'create',
            'read',
            'update',
            'delete'
        ];
    }

    public static $cacheKey='permissions_cache';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-permissions',60*60*24,function(){
            return self::latest('name')->get();
        });
    }
}
