<?php

namespace App\Traits;
use App\Models\{DeleteData,UserData};
trait DeleteTrait{

	public function checkDelete($request,$table){
		$data=$table::findOrFail($request->id );
		$userId=(string) getUserId( authId() );
		UserData::setId($userId);
		DeleteData::set($data);
		return	$data->user_id!==$userId;
	}
}