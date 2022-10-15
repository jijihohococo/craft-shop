<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,DeleteSearch};
class SocialMedia extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch;

    protected $fillable = [
        'name',
        'link',
        'pic'];

    protected $dates = ['deleted_at'];

    public static $cacheKey='social_media_cache';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-social-media',60*60*24,function(){
            return self::latest('name')->get();
        });
    }
}
