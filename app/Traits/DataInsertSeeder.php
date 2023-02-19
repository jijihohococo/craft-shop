<?php

namespace App\Traits;
use DB;
use App\Models\Admin;
trait DataInsertSeeder{

	public function insertSeed(array $insertData,$model,$table){
		$data=[];
		$seoData=[];
		$transactions=[];
		foreach($insertData as $key =>  $d){
			$d=$d+['created_at'=>NOW() , 'updated_at' => NOW() ];
			array_push($data,$d);
			array_push($transactions,[
				'guard' => Admin::API,
				'user_id' => 1,
				'model' => $model,
				'model_id' => $key + 1,
				'action' => 'create',
				'created_at' => NOW(),
				'updated_at' => NOW()
			]);
			if(property_exists($this, 'mainColumn')){
				array_push($seoData,[
					'title' => $d[$this->mainColumn],
					'page_link' => makeLink($d[$this->mainColumn]),
					'description' => $d[$this->mainColumn],
					'type' => $d[$this->mainColumn],
					'model' => $model,
					'model_id' => $key + 1,
					'created_at' => NOW(),
					'updated_at' => NOW()
				]);
			}
		}
		DB::table($table)->insert($data);
		DB::table('transactions')->insert($transactions);
		if(property_exists($this, 'mainColumn')){
			DB::table('seos')->insert($seoData);
		}
	}

}