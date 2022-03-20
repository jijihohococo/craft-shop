<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SecureController extends Controller
{
    //
    public function getToken(Request $request){
        if(isset($_COOKIE['admin_access_token'])){
            return response()->json([
                'access_token' => $_COOKIE['admin_access_token'],
                'refresh_token' => isset($_COOKIE['admin_refresh_token']) ? $_COOKIE['admin_refresh_token'] : null
            ]);
        }else{
            return response()->json([
                'message' => 'Unauthenticated'
            ],401);
        }
    }
}
