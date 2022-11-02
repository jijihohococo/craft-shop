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
        $searchResult=Transaction::
        selectAdmin()
        ->selectAdminModel($model,$model_id)
        ->whereIn('user_id', 
            Admin::select('id')
            ->searchWithName($searchData)
            ->searchWithEmail($searchData)
            ->getQuery()
        )
        ->latest('id')
        ->paginate(10);
        if(!empty($searchResult->items())){
            return response()->json([
                'transactions' => $searchResult
            ]);
        }else{
            $newSearchResult=Transaction::
            selectAdminModel($model,$model_id)
            ->latest('id')
            ->get();
            $ids=[];
            foreach($newSearchResult as $result){
                if(
                    strpos($result->created_at, $request->search) !== false
                    || 
                    strpos($result->action, $request->search) !== false   ){
                    $ids[]=$result->id;
                }
            }
            return response()->json([
                'transactions' => Transaction::selectAdmin()
                ->whereIn('id',$ids)
                ->latest('id')
                ->paginate(10)
            ]);
        }
        
    }
}
