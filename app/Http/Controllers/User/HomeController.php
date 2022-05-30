<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Category,Banner,Brand};
class HomeController extends Controller
{
    //
    public function get(){
        return response()->json([
            'categories' => (new Category)->getAll() ,
            'banners' => (new Banner)->getAll() ,
            'brands' => (new Brand)->getAll()
        ]);
    }
}
