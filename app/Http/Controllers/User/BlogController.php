<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
class BlogController extends Controller
{

    public $content = 'Blog';
    //
    public function index(){
        return response()->json([
            'blogs' => Blog::selectSeoData($this->content)->latest('id')->paginate(10)
        ]);
    }

    public function show($link){
        $blog=Blog::whereSeo($link,$this->content)->first();
        return $blog!==NULL ? response()->json([
            'blog' => $blog,
            'seo' => Seo::getSeo($this->content,$blog->id)
        ]) : dataNotFound();
    }
}
