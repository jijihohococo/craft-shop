<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use App\Traits\CategoryDataTrait;
class Subcategory extends TransactionModel
{
    use HasFactory,SoftDeletes,CategoryDataTrait;

    protected $fillable = [
        'category_id',
        'name'];

    protected $dates = ['deleted_at'];

    public static $cacheKey='subcategories_cache';

    public static $content="Subcategory";
}
