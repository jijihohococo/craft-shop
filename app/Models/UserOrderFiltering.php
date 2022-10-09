<?php

namespace App\Models;

use DB;
class UserOrderFiltering extends CollaborativeFiltering{

	public function showOrderFilter(){
		return $this->filter(
			\DB::table('order_details')
			->select(DB::raw('item_id ,
				GROUP_CONCAT(qty) AS quantities,
				GROUP_CONCAT(item_id) AS review_items,
				(SELECT GROUP_CONCAT(id) FROM items) AS items'
			))
			->groupBy('item_id')
			->get() ,
			'quantities',
			'item_id'
		);
	}
}