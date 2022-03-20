<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\{Model,SoftDeletes};

class Target extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable=[
        'name',
        'duration',
        'check'
    ];

    public static $content="Target";
}
