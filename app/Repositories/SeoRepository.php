<?php

namespace App\Repositories;

use App\Models\Seo;
class SeoRepository implements SeoRepositoryInterface{

	public function create(array $data){
		Seo::create([
			'title' => $data['title'],
			'description' => $data['description'],
			'type' => $data['type'],
			'model' => $data['model'],
			'model_id' => $data['model_id']
		]);
	}

	public function update(array $data){
		$seo=Seo::where('model',$data['model'])->where('model_id',$data['model_id'])->first();
		if($seo!==NULL){
			$seo->update([
				'title' => $data['title'],
				'description' => $data['description'],
				'type' => $data['type']
			]);
		}
	}

}