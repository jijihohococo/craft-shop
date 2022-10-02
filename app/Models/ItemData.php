<?php

namespace  App\Models;

class ItemData{

	private static $maxPrice =[];

	public static function setMaxPrice($price){
		self::$maxPrice[]=$price;
	}

	public static function getMaxPrice(){
		return max(self::$maxPrice);
	}




}