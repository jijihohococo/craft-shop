<?php

namespace App\Repositories;


interface ItemRepositoryInterface extends ContentInterface{

	public function search($categoryId,$searchData);

}