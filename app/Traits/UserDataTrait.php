<?php

namespace App\Traits;

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

}