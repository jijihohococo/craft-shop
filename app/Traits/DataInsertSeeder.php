<?php

namespace App\Traits;
use DB;
trait DataInsertSeeder{


	public function insertSeed(array $insertData,$model,$table){
		$data=[];
		$transactions=[];
		foreach($insertData as $key =>  $d){
			$d=$d+['created_at'=>NOW() , 'updated_at' => NOW() ];
			array_push($data,$d);
            array_push($transactions,[
                'guard' => 'admin_api',
                'user_id' => 1,
                'model' => $model,
                'model_id' => $key + 1,
                'action' => 'create'
            ]);
		}
		DB::table($table)->insert($data);
        DB::table('transactions')->insert($transactions);
	}

}