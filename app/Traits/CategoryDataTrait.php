<?php

namespace App\Traits;

use App\Models\Category;
trait CategoryDataTrait{

	public function scopeSelectCategory($query){
		return $query->addSelect(['category_name' => function($query) {
            $query->select('name')
            ->from('categories')
            ->whereColumn('category_id','categories.id')
            ->limit(1);
        } ]);
	}

    public function scopeSearchWithCategory($query,$searchData){
        return $query->orWherein('category_id',Category::select('id')
        ->searchWithName($searchData)->getQuery() );
    }

}