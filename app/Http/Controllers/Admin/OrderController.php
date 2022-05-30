<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Order,OrderDetail};
class OrderController extends Controller
{
    //
    public function index(){
        return response()->json([
            'orders' => Order::selectUser()
            ->getTotalQtyAndPrice()
            ->latest('id')
            ->get()
        ]);
    }

    public function show($orderId){
        return response()->json([
            'order_details' => OrderDetail::
            where('order_id',$orderId)
            ->selectItem()
            ->selectCurrency()
            ->latest('id')
            ->get()
        ]);
    }
}
