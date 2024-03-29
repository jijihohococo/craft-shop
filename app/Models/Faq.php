<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
class Faq extends Model
{
    use HasFactory;

    public static $cacheKey='faqs_cache';

    public function getAll(){
        return Cache::tags(self::$cacheKey)->remember('faqs',DateModel::ONE_DAY,function(){
            return self::get();
        });
    }
}
