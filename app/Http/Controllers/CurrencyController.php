<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Currency;
class CurrencyController extends Controller
{
    //
    public function get(){
        return response()->json([
            'currencies' => (new Currency)->getAll()
        ]);
    }
}
