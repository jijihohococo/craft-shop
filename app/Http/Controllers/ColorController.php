<?php

namespace App\Http\Controllers;

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
