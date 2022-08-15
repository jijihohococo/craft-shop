<?php

namespace App\Traits;

use DB;
trait TransactionSeeder{


	public function insertTransaction($model,$modelId=1){
		DB::table('transactions')->insert([
			'guard' => 'admin_api',
			'user_id' => 1,
			'model' => $model,
			'model_id' => $modelId ,
			'action' => 'create' ,
			'created_at' => NOW() ,
			'updated_at' => NOW()
		]);
	}

}