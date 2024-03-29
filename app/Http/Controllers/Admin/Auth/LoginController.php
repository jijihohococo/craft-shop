<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Auth\LoginController as Login;
use Illuminate\Http\Request;
use App\Models\Admin;
use App\Repositories\LoginRepositoryInterface;
use DB;
class LoginController extends Login
{
    //

    protected $accessToken , $refreshToken , $authAPI;
    protected $model='Admin';

    public function __construct(LoginRepositoryInterface $login){
        $this->accessToken=Admin::ACCESS_TOKEN;
        $this->refreshToken=Admin::REFRESH_TOKEN;
        $this->authAPI=Admin::API;
        $this->login=$login;
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
