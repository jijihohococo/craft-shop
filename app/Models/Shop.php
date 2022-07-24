<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Shop extends TransactionModel
{
    use HasFactory;

    protected $fillable=[
        'name'  ,
        'phone' ,
        'email' ,
        'address' ,
        'pic'
    ];
}
