<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Page;
class PageController extends Controller
{
    //
    public function index(){
        return response()->json([
            'pages' => (new Page)->getAll()
        ]);
    }
}
