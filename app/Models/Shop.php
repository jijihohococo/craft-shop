<?php

namespace App\Models;

use App\Traits\SeoTrait;
class Shop extends TransactionModel
{
    use SeoTrait;
    
    protected $fillable=[
        'name'  ,
        'phone' ,
        'email' ,
        'address' ,
        'pic'
    ];
}
