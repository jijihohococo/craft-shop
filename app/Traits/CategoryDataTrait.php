<?php

namespace App\Traits;

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
        return $query->orWherein('category_id',
            function($query) use($searchData) {
                $query->select('id')
                ->from('categories')
                ->where('name','like', $searchData );
            }
        );
    }

}