<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Traits\Logout;
use DB;
class LoginController extends Controller
{
    //
    use Logout;

    private $accessToken = 'access_token';
    private $refreshToken = 'refresh_token';
    private $authAPI = 'user_api';

    public function login(Request $request){
        $request->validate([
            'email' => ['required','email'],
            'password' => ['required']
        ]);
        
        
        try{

            $token=User::where('email',$request->email )->first()->passportToken();
            
            return response()->json([
                'message' => 'Login Success'
            ])->withCookie( cookie($this->accessToken, $token->original['access_token'], 10, null, null, true) )
            ->withCookie( cookie($this->refreshToken,$token->original['refresh_token'],10,null,null,true) );

        }catch(\Throwable $e){
            return response()->json([
                'message' => 'The given data was invalid.',
                'errors' => [
                    'account' => ['Login Failed']
                ]
            ],422);
        }
    }

    public function logOut(Request $request){
        DB::beginTransaction();
        $result=$this->revoke();
        DB::commit();
    }
}
