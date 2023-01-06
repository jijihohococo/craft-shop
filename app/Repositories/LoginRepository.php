<?php

namespace App\Repositories;

use App\Models\Login;
class LoginRepository implements LoginRepositoryInterface{

	public function login($model,$userId){
		Login::create([
			'model' => $model ,
			'user_id' => $userId
		]);
	}
}