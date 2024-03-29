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
			if(isset($items[$data->item_variant_id])){
				$updateShop=$items[$data->item_variant_id];
				if(isset($updateQty[$data->item_variant_id])){
					$updateQty[$data->item_variant_id]=$updateQty[$data->item_variant_id]+$data->qty;
				}else{
					$updateQty[$data->item_variant_id]=$updateShop->qty + $data->qty;
				}
					// duplicate items //
				if(!isset($shoppings[$data->id])){
					$shoppings[$data->id]=$key;
				}
			}else{
			// store in object //
				$items[$data->item_variant_id]=$data;

			}
		}
		if(!empty($shoppings) && !empty($updateQty) ){
			$tableName=$table::TABLE_NAME;
			$pdo=DB::getPdo();

			$sql="UPDATE ".$tableName." SET qty = CASE";
			
			foreach($updateQty as $itemVariantId => $qty){
				$sql .=" WHEN item_variant_id = ".$itemVariantId." THEN ".$qty;
			}
			$sql .=" END WHERE user_id = ?";

			$query=$pdo->prepare($sql);
			$query->bindValue(1,$userID, \PDO::PARAM_STR );
			$query->execute();

			$table->ofUser($userId)->whereIn('id',array_keys($shoppings))->delete();
		}
	}

	public function get($userId){
		return ShoppingCart::selectUser()
		->selectItem()
		->selectItemPrice()
		->selectItemQty()
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