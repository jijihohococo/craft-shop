<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    public $model = 'User';

    public function __construct(){
        $this->middleware('rolePermission:'.$this->model.',read')->only(['index', 'search']);
    }

    public function index(){
        return response()->json([
            'users' => User::select(['name','email','created_at'])->latest('id')->paginate(10)
        ]);
    }

    public function getTotal(){
        return response()->json([
            'total_users' => User::count()
        ]);
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'users' => User::select(['name','email','created_at'])
            ->searchWithName($searchData)
            ->searchWithEmail($searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }
}
