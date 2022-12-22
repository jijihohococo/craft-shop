<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\{SearchNameTrait,DeleteSearch,SeoTrait};
class Blog extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch,SeoTrait;

    protected $fillable=[
        'name',
        'content'
    ];
}
