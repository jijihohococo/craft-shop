<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Auth\LoginController as Login;
use Illuminate\Http\Request;
use DB;
class LoginController extends Login
{
    //

    protected $accessToken = 'access_token';
    protected $refreshToken = 'refresh_token';
    protected $authAPI = 'user_api';
    protected $model='User';

    public function logOut(Request $request){
        try{
            DB::beginTransaction();
            $result=$this->revoke();
            DB::commit();
            return out($result);
        }catch(\Throwable $e){
            DB::rollback();
            return unauthenticated();
        }
    }
}
