<?php

namespace App\Traits;

use App\Models\User;
trait UserDataTrait{

	public function scopeSelectUser($query){
		return $query->addSelect(['user_name' => function($query) {
            $query->select('name')
            ->from('users')
            ->whereColumn('user_id','users.id')
            ->limit(1);
        } , 
        'user_email' => function($query){
        	$query->select('email')
        	->from('users')
        	->whereColumn('user_id','users.id')
        	->limit(1);
        }]);
	}

	public function scopeOfUser($query,$userId){
		return $query->where('user_id',$userId);
	}

	public function scopeSearchWithUser($query,$searchData){
		return $query->orWherein('user_id',User::select('id')
			->searchWithName($searchData)
			->searchWithEmail($searchData)
			->getQuery()
		 );
	}

}