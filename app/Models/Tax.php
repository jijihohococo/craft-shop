<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\{SearchNameTrait,CreateAndUpdateSearch,DeleteSearch};
class Tax extends TransactionModel
{
    use HasFactory,SoftDeletes,SearchNameTrait,CreateAndUpdateSearch,DeleteSearch;

    protected $fillable=[
        'name',
        'rate'
    ];

    public static $cacheKey='taxes_cache';

    public function getAll(){
        return Cache::tags( self::$cacheKey )->remember('all-taxes',60*60*24,function(){
            return self::latest('name')->get();
        });
    }
    
}
