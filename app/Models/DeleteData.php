<?php

namespace App\Models;

class DeleteData{


	private static $data;


	public static function set($data){
		self::$data=$data;
	}

	public static function get(){
		return self::$data;
	}

}