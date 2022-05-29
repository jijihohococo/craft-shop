<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
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
}
