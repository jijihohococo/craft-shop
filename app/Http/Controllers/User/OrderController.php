<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Order,OrderDetail};
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

    public function show($id){
        $user=auth('user_api')->user();
        return $user!==NULL ? response()->json([
            'order_details' => OrderDetail::
            where('order_id',$id)
            ->selectItem()
            ->selectCurrency()
            ->latest('id')
            ->get()
        ]) : response()->json([
            'message' => 'Unauthenticated'
        ],401) ;
    }
}
