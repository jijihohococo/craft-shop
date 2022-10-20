<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Order,OrderDetail,User};
use App\Repositories\{OrderRepositoryInterface,ShoppingCartRepositoryInterface};
class OrderController extends Controller
{
    //
    protected $order , $shoppingCart;

    public function __construct(OrderRepositoryInterface $order,
        ShoppingCartRepositoryInterface $shoppingCart){
        $this->order=$order;
        $this->shoppingCart=$shoppingCart;
    }

    public function make(Request $request){
        $userId= (string) getUserId( authId() );
    }

    public function get(){
        $user=auth(User::API)->user();
        return $user!==NULL ? response()->json([
            'orders' => Order::selectUser()
            ->getTotalQtyAndPrice()
            ->ofUser($user->id)
            ->latest('id')
            ->paginate(10)
        ]) : unauthenticated();
    }

    public function show(Order $order){
        $user=auth(User::API)->user();
        return $user!==NULL && ( $user->id == $order->user_id )  ? response()->json([
            'order_details' => OrderDetail::
            where('order_id',$order->id)
            ->selectItem()
            ->selectCurrency()
            ->latest('id')
            ->get()
        ]) : unauthenticated();
    }
}
