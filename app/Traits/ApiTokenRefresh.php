<?php

namespace App\Traits;

use App\Models\TokenRefresh;

trait ApiTokenRefresh{

	public function refresh($accessTokenName,$refreshTokenName,$clientId){
		if(isset($_COOKIE[$refreshTokenName])){

            $refreshToken=$_COOKIE[$refreshTokenName];

            $tokenRefresh=new TokenRefresh;
            $tokenRefresh->setAccessTokenCookieName($accessTokenName);
            $tokenRefresh->setRefreshTokenCookieName($refreshTokenName);
            $tokenRefresh->makeApiRequest();
            return $tokenRefresh->refreshAPI($refreshToken,$clientId);


        }else{
            return response()->json([
                'message' => 'Unauthenticated'
            ],401);
        }
	}
}