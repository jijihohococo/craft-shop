<?php

namespace App\Models;

class UserData{


	private static $guard , $id;

	public static function setGuard($guard){
		self::$guard=$guard;
	}

	public static function getGuard(){
		return self::$guard;
	}

	public static function setId($id){
		self::$id=$id;
	}

	public static function getId(){
		return self::$id;
	}



}