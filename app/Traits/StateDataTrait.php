<?php

namespace App\Traits;
use App\Models\State;
trait StateDataTrait{

	public function scopeSelectState($query){
        return $query->addSelect(['state_name' => function($query) {
            $query->select('name')
            ->from('states')
            ->whereColumn('state_id','states.id')
            ->limit(1);
        } ]);
    }

    public function scopeSearchWithState($query,$searchData){
        return $query->orWherein('state_id',State::select('id')
        ->searchWithName($searchData)->getQuery() );
    }

}