<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subscribe;
class SubscribeController extends Controller
{
    //
    private function validateData(){
        return [
            'email' => ['required', 'email' , 'max:100', 'unique:subscribes' ]
        ];
    }

    public function make(Request $request){
        $request->validate($this->validateData());
        Subscribe::create($request->all());
        return response()->json([
            'message' => 'Subscribe successfully'
        ]);
    }
}
