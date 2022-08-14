<?php

namespace App\Repositories;

use App\Models\ShoppingCart;
class ShoppingCartRepository implements ShoppingCartRepositoryInterface{


	public function get($userId){
		return ShoppingCart::selectUser()
            ->selectItem()
            ->selectItemColorCode()
            ->ofUser($userId)
            ->latest('id')
            ->get();
	}

	public function updateOrCreate(array $array ,$table='App\Models\ShoppingCart' ){
		$shoppingCart=$table::where('item_variant_id',
			$array['variantID'])->ofUser($array['userID']);
		$qty=$shoppingCart->first()->qty ?? 0;
		$changedQty=[
			'simple' => $qty +1 ,
			'multiple' => $qty + $array['qty'] , 
			'direct' => $array['qty']
		];
		$totalQty=$changedQty[ $array['qtyCheck'] ];
		$table::updateOrCreate(['item_variant_id' => $array['variantID'],'user_id' => $array['userID'] ],[
				'item_variant_id' => $array['variantID'] , 
				'user_id' => $array['userID'] , 
				'qty' =>  $totalQty
			]);
	}

}