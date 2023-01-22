<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Faq,Seo};
class FaqController extends Controller
{
    //
    public function index(){
        return response()->json([
            'faqs' => (new Faq)->getAll(),
            'seo' => Seo::getSeo('Faq',1)
        ]);
    }
}
