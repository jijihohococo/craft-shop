<?php

namespace App\Repositories;


interface ItemRepositoryInterface{

	public function search($categoryId,$searchData);
}