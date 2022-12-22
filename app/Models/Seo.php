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

    public function seoable(){
        return $this->morphTo(__FUNCTION__, 'model', 'model_id');
    }

    public function keywords(){
        return $this->hasMany('App\Models\SeoKeyword');
    }

    public function properties(){
        return $this->hasMany('App\Models\SeoProperty');
    }

    public function names(){
        return $this->hasMany('App\Models\SeoName');
    }
}
