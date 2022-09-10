<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use DB;
class RegisterController extends Controller
{
    //
    private function validateData(){
        return [
            'name' => ['required', 'string', 'max:100', 'unique:users' ] ,
            'email' => ['required', 'email' , 'max:100', 'unique:users' ] ,
            'password' => ['required', 'string', 'min:8', 'confirmed']
        ];
    }

    public function register(Request $request){
        $request->validate($this->validateData());
        $token=User::create($request->all())->passportToken();
        return getToken(['access_token' => User::ACCESS_TOKEN ,
            'refresh_token' => User::REFRESH_TOKEN  ],$token,'Login Success');
    }
}
