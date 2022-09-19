<?php

namespace App\Traits;

use Socialite;
use App\Models\User;
trait SocialLoginTrait{

	public function socialLogin($social){
		try{
			$user=Socialite::driver($social)->stateless()->user();
			$realUser=User::where('email',$user->email)->first();
			$token=User::updateOrCreate([
				'email' => $user->email
			],[
				'name' => $user->name ,
				'password' => $realUser->password ?? rand()
			])->passportToken();
			return getToken(['access_token' => User::ACCESS_TOKEN ,
				'refresh_token' => User::REFRESH_TOKEN  ],$token,'Login Success');
		}catch(\Throwable $e){
			return loginFailed();
		}
	}

}