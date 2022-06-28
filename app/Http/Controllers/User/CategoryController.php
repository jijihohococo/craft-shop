<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
class CategoryController extends Controller
{
    //
    public function get(){
        return response()->json([
            'categories' => (new Category)->getWithSubcategories()
        ]);
    }
}
