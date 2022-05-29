<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
class HomeController extends Controller
{
    //
    public function getCategories(){
        return response()->json([
            'categories' => (new Category)->get()
        ]);
    }
}
