<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Admin,PassportDate};
use App\Traits\Logout;
use DB;
class LoginController extends Controller
{
    //
    use Logout;

    private $accessToken = 'admin_access_token';
    private $refreshToken = 'admin_refresh_token';
    private $authAPI = 'admin_api';

    public function login(Request $request){
        $request->validate([
            'email' => ['required','email'],
            'password' => ['required']
        ]);
        
        
        try{

            $token=Admin::where('email',$request->email )->first()->passportToken();
            
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

    public function logOut(Request $request){
        
        try{
            DB::beginTransaction();
            $result=$this->revoke();
            DB::commit();
            return response()->json([
                'message' => 'Log out success'
            ])->withCookie($result['cookie'])
            ->withCookie($result['refreshCookie']);
        }catch(\Throwable $e){
            DB::rollback();
            return response()->json([
                'message' => 'Unauthenticated'
            ],401);
        }
    }
}
