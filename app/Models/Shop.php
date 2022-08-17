<?php

namespace App\Models;

class Shop extends TransactionModel
{

    protected $fillable=[
        'name'  ,
        'phone' ,
        'email' ,
        'address' ,
        'pic'
    ];
}
