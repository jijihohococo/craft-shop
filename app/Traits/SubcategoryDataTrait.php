<?php

namespace App\Traits;

use App\Models\Subcategory;
trait SubcategoryDataTrait{

	public function scopeSearchWithSubcategory($query,$searchData){
        return $query->orWherein('subcategory_id',Subcategory::select('id')->searchWithName($searchData)->getQuery() );
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