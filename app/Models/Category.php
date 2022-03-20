<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\{Model,SoftDeletes};

class Category extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable=[
        'name'
    ];
    protected $dates = ['deleted_at'];

    public static $content="Category";
}
