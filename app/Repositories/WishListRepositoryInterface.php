<?php

namespace App\Repositories;

interface WishListRepositoryInterface{


	public function update($userId);

	public function logOutUpdate($userId);

	public function get($userId);
	
}