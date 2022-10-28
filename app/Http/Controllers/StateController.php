<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\State;
class StateController extends Controller
{
    //
    public function get($countryId){
        return response()->json([
            'states' => (new State)->getByCountryId($countryId)
        ]);
    }
}
