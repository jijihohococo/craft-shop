<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
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
