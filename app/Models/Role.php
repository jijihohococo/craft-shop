<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
class Role extends TransactionModel
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'name'];

    protected $dates = ['deleted_at'];

    public static $cacheKey='roles_cache';

    public static $content="Role";

    public function permissions(){
        return $this->hasMany('App\Models\RolePermission');
    }

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-roles',60*60*24,function(){
            return self::latest('name')->get();
        });
    }
}
