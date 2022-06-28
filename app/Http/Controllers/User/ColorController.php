<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Color;
class ColorController extends Controller
{
    //
    public function get(){
        return response()->json([
            'colors' => (new Color)->getAll()
        ]);
    }
}
