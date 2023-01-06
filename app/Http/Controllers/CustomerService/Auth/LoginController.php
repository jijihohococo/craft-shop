<?php

namespace App\Http\Controllers\CustomerService\Auth;

use App\Http\Controllers\Auth\LoginController as Login;
use Illuminate\Http\Request;
use App\Models\CustomerService;
use App\Repositories\LoginRepositoryInterface;
use DB;

class LoginController extends Login
{
    //
    protected $accessToken , $refreshToken , $authAPI;
    protected $model='CustomerService';

    public function __construct(LoginRepositoryInterface $login){
        $this->accessToken=CustomerService::ACCESS_TOKEN;
        $this->refreshToken=CustomerService::REFRESH_TOKEN;
        $this->authAPI=CustomerService::API;
        $this->login=$login;
    }
}
