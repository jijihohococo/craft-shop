<?php

namespace App\Repositories;

interface ShoppingCartRepositoryInterface{


	public function get($userId);

	public function updateOrCreate(array $array ,$table='App\Models\ShoppingCart' );

}