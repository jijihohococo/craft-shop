<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brand;
class BrandController extends Controller
{
    //
    public function get(){
        return response()->json([
            'brands' => (new Brand)->getAll()
        ]);
    }
}
