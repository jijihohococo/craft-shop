<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\{SearchNameTrait,DeleteSearch};
class Blog extends TransactionModel
{
    use SoftDeletes,SearchNameTrait,DeleteSearch;

    protected $fillable=[
        'name',
        'content'
    ];
}
