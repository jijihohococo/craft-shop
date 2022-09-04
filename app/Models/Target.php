<?php

namespace App\Models;


use Illuminate\Database\Eloquent\SoftDeletes;
class Target extends TransactionModel
{
    use SoftDeletes;

    protected $fillable=[
        'name',
        'duration',
        'check'
    ];

}
