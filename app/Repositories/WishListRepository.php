<?php

namespace App\Repositories;

use App\Models\WishList;
use App\Traits\UserUpdate;
class WishListRepository implements WishListRepositoryInterface{

	use UserUpdate;

	public $model='App\Models\WishList';

	public function update($userId){
		$this->inUpdate($userID,$this->model);
		$items=[];
		$duplicateWishes=[];
		foreach(WishList::where('user_id',$userId)->latest()->get() as $key => $wish){
			if(isset($items[$wish->item_id])){
				$duplicateWishes[]=$wish->id;
			}else{
				$items[$wish->item_id]=$key;
			}
		}
		WishList::whereIn('id',$duplicateWishes)->delete();
	}

	public function logOutUpdate($userId){

		$this->outUpdate($userId,$this->model);
		
	}

	public function get($userId){
		return WishList::selectUser()
		->selectItem()
		->ofUser( $userId )
		->get();
	}
}