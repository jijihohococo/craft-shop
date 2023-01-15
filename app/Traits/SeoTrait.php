<?php

namespace App\Traits;

trait SeoTrait{

    public function scopeSelectSeo($query){
        return $query->addSelect(['seo_id' => function($query){
            $query->select('id')
            ->from('seos')
            ->where('seos.model','Item')
            ->whereColumn('seos.model_id',self::$tableName.'.id')
            ->limit(1);
        } ]);
    }
    
}