<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Banner extends TransactionModel
{
    use HasFactory,SoftDeletes;

    protected $fillable =[
        'title',
        'pic'
    ];
    protected $dates = ['deleted_at'];

    public static $content="Banner";
}
