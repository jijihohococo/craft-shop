<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Collection;
class CollectionController extends Controller
{
    //
    public function get(){
        return response()->json([
            'collections' => (new Collection)->getAll()
        ]);
    }
}
