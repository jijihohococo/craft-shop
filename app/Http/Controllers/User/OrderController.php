<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    //
    public function get(){
        $user=auth('user_api')->user();
        return $user!==NULL ? response()->json([
            'orders' => Order::selectUser()
            ->getTotalQtyAndPrice()
            ->ofUser($user->id)
            ->latest('id')
            ->get()
        ]) : response()->json([
            'message' => 'Unauthenticated'
        ],401);
    }

    public function 
}
