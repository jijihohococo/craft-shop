<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    //
    public function get(){
        $userId=auth('user_api')->user();
        return response()->json([
            'orders' => Order::selectUser()
            ->getTotalQtyAndPrice()
            ->ofUser($userId)
            ->latest('id')
            ->get()
        ]);
    }
}
