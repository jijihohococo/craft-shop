<?php

namespace App\Traits;

use Laravel\Passport\{Token,RefreshToken};
trait Logout{

	protected $user;

	public function revoke(){
		$cookie = \Cookie::forget($this->accessToken);
		$refreshCookie=\Cookie::forget($this->refreshToken);
		$this->user=auth($this->authAPI)->user();
		$userToken=$this->user->token();
		$tokens=$userToken->get()->pluck('id');
		Token::whereIn('id', $tokens)
		->update(['revoked' => true]);

		RefreshToken::whereIn('access_token_id', $tokens)->update(['revoked' => true]);

		return [
			'cookie' => $cookie ,
			'refreshCookie' => $refreshCookie
		];
	}

}