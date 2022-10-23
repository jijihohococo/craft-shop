<?php

namespace App\Traits;

trait UserUpdate{

	public function inUpdate($userId,$table){
		$table::ofUser( (string) getUserId(null) )->update([
			'user_id' => $userId
		]);
	}

	public function outUpdate($userId,$table){
		$table::ofUser( $userId  )->update([
			'user_id' => (string) getUserId(null)
		]);
	}

}