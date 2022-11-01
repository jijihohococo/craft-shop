<?php

namespace App\Traits;

trait SearchTrashTrait{


	public static function searchTrash($items,$searchData){
			return !empty($items->items()) ? $items :
			self::onlyTrashed()
			->where('created_at','like',$searchData)
			->latest('id')
			->paginate(10);
	}

}