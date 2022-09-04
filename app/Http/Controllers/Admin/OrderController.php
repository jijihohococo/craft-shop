<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Order,OrderDetail};
class OrderController extends Controller
{
    //
    public $model = 'Order';

    public function __construct(){
        $this->middleware('rolePermission:'.$this->model.',read')->only(['index','search','show']);
    }

    public function index(){
        return response()->json([
            'orders' => Order::selectUser()
            ->getTotalQtyAndPrice()
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function search(){
        return response()->json([

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
