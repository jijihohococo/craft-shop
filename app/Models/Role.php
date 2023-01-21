<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch};
class Role extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch;

    protected $fillable = [
        'name'];

    protected $dates = ['deleted_at'];

    public static $cacheKey='roles_cache';

    public function permissions(){
        return $this->hasMany('App\Models\RolePermission');
    }

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-roles',DateModel::ONE_DAY,function(){
            return self::latest('name')->get();
        });
    }
}
