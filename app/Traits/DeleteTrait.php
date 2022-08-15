<?php

namespace App\Traits;
use App\Models\DeleteData;
trait DeleteTrait{

	public function checkDelete($table){
		$data=$table::findOrFail(request()->id );
		DeleteData::set($data);
		return	$data->user_id!==(string) getUserId( authId() );
	}
}