<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use DB;
class LoginController extends Controller
{
    //

    public function login(Request $request){
        $request->validate([
            'email' => ['required','email'],
            'password' => ['required']
        ]);
        
        
        try{

            $token=User::where('email',$request->email )->first()->passportToken();
            
            return response()->json([
                'message' => 'Login Success'
            ])->withCookie( cookie('access_token', $token->original['access_token'], 10, null, null, true) )
            ->withCookie( cookie('refresh_token',$token->original['refresh_token'],10,null,null,true) );

        }catch(\Throwable $e){
            return response()->json([
                'message' => 'The given data was invalid.',
                'errors' => [
                    'account' => ['Login Failed']
                ]
            ],422);
        }
    }
}
