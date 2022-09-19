<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PassportDate;
use App\Traits\Logout;
abstract class LoginController extends Controller
{
    //
    use Logout;

    public function login(Request $request){
        $request->validate([
            'email' => ['required','email'],
            'password' => ['required']
        ]);
        
        
        try{
            $model='App\Models\\'.$this->model;
            $token=$model::where('email',$request->email )->first()->passportToken();

            return getToken(['access_token' => $this->accessToken ,
            'refresh_token' => $this->refreshToken  ],$token,'Login Success');

        }catch(\Throwable $e){
            return loginFailed();
        }
    }
}
