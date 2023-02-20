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

    public function scopeWhereSeo($query,$link,$model){
        return $query->where('id',function($query) use($link,$model) {
            $query->select('model_id')
            ->from('seos')
            ->where('model',$model)
            ->where('page_link',$link)
            ->limit(1);
        });
    }

    public function scopeWhereLink($query,$column,$link){
        $table=NULL;
        $model=NULL;
        switch ($column) {
            case 'category_id':
            $table='categories';
            $model='Category';
            break;
            
            case 'subcategory_id':
            $table='subcategories';
            $model='Subcategory';
            break;

            case 'brand_id':
            $table='brands';
            $model='Brand';
            break;
        }
        return $query->where($column,function($query) use($table,$link,$model) {
            $query->select($table.'.id')
            ->from($table)
            ->where($table.'.id',function($query) use($link,$model) {
                $query->select('seos.model_id')
                ->from('seos')
                ->where('seos.page_link',$link)
                ->where('seos.model',$model)
                ->limit(1);
            });
        });
    }

    public function scopeWhereInSeos($query,$column,$model,$links){
        return $query->whereIn($column,function($query) use($links,$model){
            $query->select('seos.model_id')
            ->from('seos')
            ->where('seos.model',$model)
            ->whereIn('seos.page_link',$links);
        });
    }
    
}