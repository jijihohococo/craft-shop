<?php

namespace App\Repositories;


interface ItemRepositoryInterface{
	
	public function getAll();

	public function getMaxPrice($itemIds);

	public function getMinPrice($itemIds);
}