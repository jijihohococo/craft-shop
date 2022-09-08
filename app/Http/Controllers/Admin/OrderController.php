<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Order,OrderDetail};
use Carbon\Carbon;
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

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'orders' => Order::selectUser()
            ->getTotalQtyAndPrice()
            ->where('delivery_price','like',$searchData)
            ->orWhere('address','like',$searchData)
            ->orWhere('status','like',$searchData)
            ->searchWithUser($searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function show($orderId){
        return response()->json([
            'order' => Order::selectUser()
            ->getTotalQtyAndPrice()
            ->findOrFail($orderId) ,
            
            'order_details' => OrderDetail::
            where('order_id',$orderId)
            ->selectItem()
            ->selectCurrency()
            ->latest('id')
            ->get()
        ]);
    }

    public function getTodayTotal(){
        return response()->json([
            'today_total_orders' => Order::select('id')
            ->whereDate('created_at',Carbon::today())->count()
        ]);
    }
}
