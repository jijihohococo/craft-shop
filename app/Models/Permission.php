<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
class Permission extends TransactionModel
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'name',
        'model',
        'create',
        'read',
        'update',
        'delete'];

    public static function getModels(){
        return [
            'Admin',
            'Banner',
            'Category',
            'Subcategory',
            'Brand',
            'Item',
            'self',
            'Role',
            'Target',
            'User',
            'Currency',
            'Tax',
            'ShopSetting',
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
