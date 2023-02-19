<?php

namespace App\Traits;

trait SeoTrait{

    public function scopeSelectSeoData($query,$model){
        return $query->addSelect(['link' => function($query) use($model){
            $query->select('page_link')
            ->from('seos')
            ->where('seos.model',$model)
            ->whereColumn('seos.model_id',self::$tableName.'.id')
            ->limit(1);
        } ]);
    }
    
}