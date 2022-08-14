<?php

namespace App\Traits;

trait DeleteTrait{

	public function checkDelete($table){
		return	$table::findOrFail(request()->id )->user_id!==(string) getUserId( authId() );
	}
}