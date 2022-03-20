<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Admin,PassportDate};
use Laravel\Passport\{Token,RefreshToken};
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

            $token=Admin::where('email',$request->email )->first()->passportToken();
            
            return response()->json([
                'message' => 'Login Success'
            ])->withCookie( cookie('admin_access_token', $token->original['access_token'], changeDaysToMinutes(PassportDate::ACCESS_TOKEN_EXPIRE_DAY), null, null, true) )
            ->withCookie( cookie('admin_refresh_token',$token->original['refresh_token'],changeDaysToMinutes(PassportDate::REFRESH_TOKEN_EXPIRE_DAY),null,null,true) );

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
    
            $cookie = \Cookie::forget('admin_access_token');
            $refreshCookie=\Cookie::forget('admin_refresh_token');
            $admin=auth('admin_api')->user()->token();
            $tokens=$admin->get()->pluck('id');
            DB::beginTransaction();
            Token::whereIn('id', $tokens)
            ->update(['revoked' => true]);

            RefreshToken::whereIn('access_token_id', $tokens)->update(['revoked' => true]);
            DB::commit();
            return response()->json([
                'message' => 'Log out success'
            ])->withCookie($cookie)
            ->withCookie($refreshCookie);
        }catch(\Throwable $e){
            DB::rollback();
            return response()->json([
                'message' => 'Unauthenticated'
            ],401);
        }
    }
}
