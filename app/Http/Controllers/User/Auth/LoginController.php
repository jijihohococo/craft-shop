<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Auth\LoginController as Login;
use Illuminate\Http\Request;
use App\Models\User;
use DB;
class LoginController extends Login
{
    //

    protected $accessToken , $refreshToken , $authAPI;
    protected $model='User';

    public function __construct(){
        $this->accessToken=User::ACCESS_TOKEN;
        $this->refreshToken=User::REFRESH_TOKEN;
        $this->authAPI=User::API;
    }

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
