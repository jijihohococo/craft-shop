<?php

namespace App\Traits;

trait UserUpdate{

	public function inUpdate($userID,$table){
		$table::ofUser( (string) getUserId(null) )->update([
			'user_id' => $userId
		]);
	}

	public function outUpdate($userID,$table){
		$table::ofUser( $userId  )->update([
			'user_id' => (string) getUserId(null)
		]);
	}

}