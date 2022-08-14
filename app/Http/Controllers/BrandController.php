<?php

namespace App\Http\Controllers;

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
