<?php

namespace App\Models;

class Seo extends TransactionModel
{

    protected $fillable=[
        'title',
        'description',
        'type',
        'model',
        'model_id'
    ];
}
