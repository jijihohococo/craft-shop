<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserData;
class UserController extends Controller
{
    //
    public function getId(){
        return response()->json([
            'user_id' => UserData::getId() ?? (string) getUserId( authId() ) ]);
    }
}
