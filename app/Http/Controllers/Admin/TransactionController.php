<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Transaction,Admin};
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
            ->whereIn('user_id',Admin::select('id')
                ->searchWithName($searchData)
                ->where('email','like',$searchData)
                ->getQuery()
             )->orWhere('action','like',$searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }
}
