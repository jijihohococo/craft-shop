<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
class Item extends TransactionModel
{
    use HasFactory,SoftDeletes;

    protected $fillable=[
        'name',
        'category_id',
        'description'
    ];
    protected $dates = ['deleted_at'];

    public static $content="Item";

    public function category(){
        return $this->belongsTo('App\Models\Category')->withDefault()->withTrashed();
    }

    public function pics(){
        return $this->hasMany('App\Models\ItemImage');
    }

    public function scopeSelectCategoryName($query){
        return $query->addSelect(['category_name' => function($query) {
            $query->select('name')
            ->from('categories')
            ->whereColumn('category_id','categories.id')
            ->limit(1);
        } ]);
    }
}
