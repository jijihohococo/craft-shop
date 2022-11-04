<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Notification,User,UserData};
class NotificationController extends Controller
{
    //
    private $userId;
    public function __construct(){
        $this->userId= UserData::getId() ?? (string) getUserId( authId() ) ;
    }

    public function showShortList(){
        return response()->json([
            'notifications' => Notification::where('read',false)
            ->where('guard',User::API)
            ->where('user_id',$this->userId)
            ->latest('id')
            ->limit(6)
            ->get()
        ]);
    }

    public function index(){
        return  response()->json([
            'notifications' => Notification::where('guard',User::API)
            ->where('user_id',$this->userId)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    
}
