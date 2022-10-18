<?php

namespace App\Repositories;

use App\Models\ShoppingCart;
use App\Traits\UserUpdate;
use DB;
class ShoppingCartRepository implements ShoppingCartRepositoryInterface{

	use UserUpdate;


	public function update($userID,$table='App\Models\ShoppingCart'){
		$this->inUpdate($userID,$table);
		$userShoppingCart=$table::ofUser( $userID  )->latest()->get();
		$items=[];
		$shoppings=[];
		$updateQty=[];
		foreach($userShoppingCart as $key => $data ){
			if(isset($items[$data->item_id])){
				$updateShop=$items[$data->item_id];
					// $updateShop->update([
					// 	'qty' => $updateShop->qty + $data->qty
					// ]);
				if(isset($updateQty[$data->item_id])){
					$updateQty[$data->item_id]=$updateQty[$data->item_id]+$data->qty;
				}else{
					$updateQty[$data->item_id]=$updateShop->qty + $data->qty;
				}
					// duplicate items //
				$shoppings[]=$data->id;
			}else{
			// store in object //
				$items[$data->item_id]=$data;

			}
		}
		if(!empty($shoppings) && !empty($updateQty) ){
			$pdo=DB::getPdo();

			$sql="UPDATE shopping_carts SET qty = CASE";
			
			foreach($updateQty as $itemId => $qty){
				$sql .=" WHEN item_id = ".$itemId." THEN ".$qty;
			}
			$sql .=" END WHERE user_id = ?";

			$query=$pdo->prepare($sql);
			$query->bindValue(1,$userID, \PDO::PARAM_STR );
			$query->execute();

			$table->ofUser($userId)->whereIn('id',$shoppings)->delete();
		}
	}

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

	public function logOutUpdate($userId,$table='App\Models\ShoppingCart'){
		$this->outUpdate($userId,$table);
	}

	public function delete($userId,$table='App\Models\ShoppingCart'){
		$table::ofUser( $userId )->delete();
	}

}