<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PassportDate;
use App\Traits\Logout;
class LoginController extends Controller
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
            
            return response()->json([
                'message' => 'Login Success'
            ])->withCookie( cookie($this->accessToken, $token->original['access_token'], changeDaysToMinutes(PassportDate::ACCESS_TOKEN_EXPIRE_DAY), null, null, true) )
            ->withCookie( cookie($this->refreshToken,$token->original['refresh_token'],changeDaysToMinutes(PassportDate::REFRESH_TOKEN_EXPIRE_DAY),null,null,true) );

        }catch(\Throwable $e){
            return response()->json([
                'message' => 'The given data was invalid.',
                'errors' => [
                    'account' => ['Login Failed']
                ]
            ],401);
        }
    }
}
