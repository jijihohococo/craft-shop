<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Attribute extends TransactionModel
{
    use HasFactory,SoftDeletes;

    protected $fillable=[
        'name'
    ];

    public static $content='Attribute';
}
