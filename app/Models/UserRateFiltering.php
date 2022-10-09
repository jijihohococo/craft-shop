<?php

namespace App\Models;

use DB;
class UserRateFiltering extends CollaborativeFiltering{

	public function showReviewFilter(){
		return $this->filter(
			\DB::table('item_reviews')
			->select(DB::raw('user_id,
				GROUP_CONCAT(rate) AS rates,
				GROUP_CONCAT(item_id) AS review_items,
				(SELECT GROUP_CONCAT(id) FROM items) AS items'
			))
			->groupBy('user_id')
			->get() ,
			'rates',
			'user_id'
		);
	}
}