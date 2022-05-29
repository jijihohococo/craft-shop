<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends TransactionModel
{
    use HasFactory,SoftDeletes;

    protected $fillable=[
        'name'
    ];
    protected $dates = ['deleted_at'];

    public static $content="Category";

    public function get(){
        return Category::orderBy('name')->get();
    }
}
