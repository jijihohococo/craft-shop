<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SocialMedia;
class SocialMediaController extends Controller
{
    //
    public function get(){
        return response()->json([
            'social_medias' => (new SocialMedia)->getAll()
        ]);
    }
}
