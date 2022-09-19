<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Order,OrderDetail,User};
use App\Repositories\OrderRepositoryInterface;
class OrderController extends Controller
{
    //
    private $user , $order;

    public function __construct(OrderRepositoryInterface $order){
        $this->user=auth(User::API)->user();
        $this->order=$order;
    }

    public function make(Request $request){

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
        return $this->user!==NULL && ( $this->user->id == OrderDetail::findOrFail($id)->order->user_id )  ? response()->json([
            'order_details' => OrderDetail::
            where('order_id',$id)
            ->selectItem()
            ->selectCurrency()
            ->latest('id')
            ->get()
        ]) : unauthenticated();
    }
}
