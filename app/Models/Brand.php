<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Brand extends TransactionModel
{
    use HasFactory,SoftDeletes;

    protected $fillable=[
        'name',
        'pic'
    ];

    public static $content='Brand';
}
