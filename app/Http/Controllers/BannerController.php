<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Banner;
class BannerController extends Controller
{
    //
    public function get(){
        return response()->json([
            'banners' => (new Banner)->getAll()
        ]);
    }
}
