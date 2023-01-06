<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PassportDate;
use App\Traits\Logout;
use App\Repositories\LoginRepositoryInterface;
use DB;
abstract class LoginController extends Controller
{
    //
    use Logout;

    public $login;

    public function login(Request $request){
        $request->validate([
            'email' => ['required','email'],
            'password' => ['required']
        ]);
        
        
        try{
            $model='App\Models\\'.$this->model;
            $user=$model::where('email',$request->email)->first();
            if($user==NULL){
                return loginFailed();
            }
            DB::beginTransaction();
            $token=$user->passportToken();
            $this->login->login($this->model,$user->id);
            DB::commit();
            return getToken(['access_token' => $this->accessToken ,
            'refresh_token' => $this->refreshToken  ],$token,'Login is Success');

        }catch(\Throwable $e){
            DB::rollback();
            return loginFailed();
        }
    }
}
