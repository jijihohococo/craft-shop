<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Order,OrderDetail};
class OrderController extends Controller
{
    //
    private $user;

    public function __construct(){
        $this->user=auth('user_api')->user();
    }

    public function get(){
        return $this->user!==NULL ? response()->json([
            'orders' => Order::selectUser()
            ->getTotalQtyAndPrice()
            ->ofUser($this->user->id)
            ->latest('id')
            ->paginate(10)
        ]) : unauthenticated();
    }

    public function show($id){
        return $this->user!==NULL ? response()->json([
            'order_details' => OrderDetail::
            where('order_id',$id)
            ->selectItem()
            ->selectCurrency()
            ->latest('id')
            ->get()
        ]) : unauthenticated();
    }
}
