<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\State;
class StateController extends Controller
{
    //
    public function get($countryId){
        return $this->indexPage(
            (new State)->getByCountryId($countryId)
        );
    }
}
