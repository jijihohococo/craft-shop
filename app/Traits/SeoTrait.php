<?php

namespace App\Traits;

trait SeoTrait{

    public function seo(){
        return $this->morphOne('App\Models\Seo', 'seoable');
    }
    
}