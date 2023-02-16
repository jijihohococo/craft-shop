<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subscribe;
class SubscribeController extends Controller
{
    //
    public function index(){
        return response()->json([
            'subscribes' => Subscribe::select('email')->paginate(10)
        ]);
    }
}
