<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Category,Banner};
class HomeController extends Controller
{
    //
    public function getCategories(){
        return response()->json([
            'categories' => (new Category)->getAll() ,
            'banners' => (new Banner)->getAll()
        ]);
    }
}
