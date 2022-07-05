<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class ShopSetting extends TransactionModel
{
    use HasFactory,SoftDeletes;

    protected $fillable=[
        'app_name',
        'app_pic',
        'theme_color'
    ];
}
