<?php

namespace App\Repositories;

interface ShoppingCartRepositoryInterface{

	public function update($userID,$table='App\Models\ShoppingCart');

	public function get($userId);

	public function updateOrCreate(array $array ,$table='App\Models\ShoppingCart' );

	public function logOutUpdate($userId,$table='App\Models\ShoppingCart');

	public function delete($userId,$table='App\Models\ShoppingCart');

}