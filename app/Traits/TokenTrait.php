<?php

namespace App\TokenTrait;

use App\Models\TokenRefresh;
trait TokenTrait{

	public function setTokenData(array $data,$next,$request){
		$tokenRefresh=new TokenRefresh;
        $tokenRefresh->setAccessTokenCookieName($data['access_token']);
        $tokenRefresh->setRefreshTokenCookieName($data['refresh_token']);
        $tokenRefresh->setNext($next);
        $tokenRefresh->setRequest($request);
        $tokenRefresh->setGuardName($data['api']);
        $tokenRefresh->setClientId($data['client_id']);
        return $tokenRefresh;
	}



}