<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch};
class Permission extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch;

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
            'ItemStock',
            'ItemPrice',
            'Role',
            'Target',
            'User',
            'Currency',
            'Tax',
            'Attribute',
            'Color',
            'Country',
            'Order'
        ];
    }

    public static function getExceptModels(){
        return [
            'ItemStock',
            'ItemPrice'
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
