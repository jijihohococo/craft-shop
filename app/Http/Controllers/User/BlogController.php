<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
class BlogController extends Controller
{
    //
    public function index(){
        return response()->json([
            'blogs' => Blog::latest('id')->paginate(10)
        ]);
    }

    public function show(Blog $blog){
        return response()->json([
            'blog' => $blog,
            'seo' => Seo::getSeo('Blog',$blog->id)
        ]);
    }
}
