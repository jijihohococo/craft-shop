<?php

namespace App\Traits;

use Socialite,DB;
use App\Models\User;
trait SocialLoginTrait{

	public function socialLogin($social){
		try{
			$user=Socialite::driver($social)->stateless()->user();
			$realUser=User::where('email',$user->email)->first();
			DB::beginTransaction();
			$loginUser=User::updateOrCreate([
				'email' => $user->email
			],[
				'name' => $user->name ,
				'password' => $realUser->password ?? rand()
			]);
			$token=$loginUser->passportToken();
			$this->shoppingCart->update( (string) $loginUser->id );
			$this->wishList->update( (string) $loginUser->id );
			DB::commit();
			return getToken(['access_token' => User::ACCESS_TOKEN ,
				'refresh_token' => User::REFRESH_TOKEN  ],$token,'Login is Success');
		}catch(\Throwable $e){
			DB::rollback();
			return loginFailed();
		}
	}

}