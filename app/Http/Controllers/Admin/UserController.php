<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{

    public function __construct(){
        $this->middleware('rolePermission:'.User::$content.',read')->only(['index','getTotal']);
    }

    public function index(){
        return response()->json([
            'users' => User::select(['name','email'])->latest('id')->paginate(10)
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
            'users' => User::where('name','like',$searchData)
            ->orWhere('email','like',$searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }
}
