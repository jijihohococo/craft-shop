<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Transaction;
class TransactionController extends Controller
{
    //
    public function __construct(){
        $this->middleware('rolePermission:'.request()->route('model').',read')->only(['get']);
    }

    public function get(Request $request,$model,$model_id){
        return response()->json([
            'transactions' => Transaction::
            selectAdmin()
            ->selectAdminModel($model,$model_id)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function search(Request $request,$model,$model_id){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'transactions' => Transaction::
            selectAdmin()
            ->selectAdminModel($model,$model_id)
            ->whereIn('user_id',function($query) use ($searchData){
                $query->select('id')
                ->from('admins')
                ->where('name','like',$searchData)
                ->orWhere('email','like',$searchData);
            })
            ->orWhere('action','like',$searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }
}
