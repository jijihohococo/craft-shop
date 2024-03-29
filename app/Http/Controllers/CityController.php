<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\City;
class CityController extends Controller
{
    //
    public function get($stateId,$countryId){
        return response()->json([
            'cities' => (new City)->getByStateAndCountry($stateId,$countryId)
        ]);
    }
}
