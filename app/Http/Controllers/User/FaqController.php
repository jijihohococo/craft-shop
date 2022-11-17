<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Faq;
class FaqController extends Controller
{
    //
    public function index(){
        return response()->json([
            'faqs' => (new Faq)->getAll()
        ]);
    }
}
