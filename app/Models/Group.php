<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\{Model,SoftDeletes};

class Group extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable=[
        'name',
        'color_code'
    ];
    protected $dates = ['deleted_at'];

    public static $content="Group";
}
