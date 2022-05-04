<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
class Item extends TransactionModel
{
    use HasFactory,SoftDeletes;

    protected $fillable=[
        'name',
        'brand_id',
        'category_id',
        'description'
    ];
    protected $dates = ['deleted_at'];

    public static $content="Item";

    public function category(){
        return $this->belongsTo('App\Models\Category')->withDefault()->withTrashed();
    }

    public function brand(){
        return $this->belongsTo('App\Models\Brand')->withDefault()->withTrashed();
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

    public function scopeSelectBrandName($query){
        return $query->addSelect(['brand_name' => function($query) {
            $query->select('name')
            ->from('brands')
            ->whereColumn('brand_id','brands.id')
            ->limit(1);
        } ]); 
    }
}
