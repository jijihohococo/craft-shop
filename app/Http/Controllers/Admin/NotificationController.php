<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Notification,Admin};
class NotificationController extends Controller
{
    //
    public function showShortList(){
        return response()->json([
            'notifications' => Notification::where('read',false)
            ->where('guard',Admin::API)
            ->latest('id')
            ->limit(6)
            ->get()
        ]);
    }

    public function index(){
        return response()->json([
            'notifications' => Notification::where('guard',Admin::API)->
            latest('id')->paginate(10)
        ]);
    }
}
