<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Country;
class CountryController extends Controller
{
    //
    public function get(){
        return response()->json([
            'countries' => (new Country)->getAll()
        ]);
    }
}
