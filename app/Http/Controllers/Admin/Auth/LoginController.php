<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Auth\LoginController as Login;
use Illuminate\Http\Request;
use DB;
class LoginController extends Login
{
    //

    protected $accessToken = 'admin_access_token';
    protected $refreshToken = 'admin_refresh_token';
    protected $authAPI = 'admin_api';
    protected $model='Admin';

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
