<?php

namespace App\Traits;

trait AdminRolePermission{


	public function authorized($content){
		$this->middleware('rolePermission:'.$content.',read')->only(['index','search']);
        $this->middleware('rolePermission:'.$content.',create')->only(['create','store']);
        $this->middleware('rolePermission:'.$content.',update')->only(['edit','update']);
        $this->middleware('rolePermission:'.$content.',delete')->only(['destroy','restore']);
	}

}