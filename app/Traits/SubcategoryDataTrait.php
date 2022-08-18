<?php

namespace App\Traits;

trait SubcategoryDataTrait{

	use SearchNameTrait;

	public function scopeSearchWithSubcategory($query,$searchData){
        $that=$this;
        return $query->orWherein('subcategory_id',
            function($query) use($searchData,$that){
                $that->scopeSearchWithName(
                $query->select('id')
                ->from('subcategories') ,
                $searchData );
            });
    }

    public function scopeSelectSubcategory($query){
        return $query->addSelect(['subcategory_name' => function($query) {
            $query->select('name')
            ->from('subcategories')
            ->whereColumn('subcategory_id','subcategories.id')
            ->limit(1);
        } ]);
    }

}