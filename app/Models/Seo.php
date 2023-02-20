<?php

namespace App\Models;

use App\Http\Resources\SeoResource;
class Seo extends TransactionModel
{

    protected $fillable=[
        'title',
        'page_link',
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

    public static function getSeo($model,$modelId){
        return new SeoResource(self::select(['id','title','page_link','description'])
        ->where('model',$model)
        ->where('model_id',$modelId)
        ->first());
    }
}
