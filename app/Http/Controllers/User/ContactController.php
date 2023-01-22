<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;
class ContactController extends Controller
{
    //
    public function make(Request $request){
        $request->validate([
            'name' => ['required'],
            'email' => ['required'],
            'subject' => ['required'],
            'content' => ['required']
        ]);
        Contact::create($request->all());
        return response()->json([
            'message' => 'Success'
        ]);
    }
}
