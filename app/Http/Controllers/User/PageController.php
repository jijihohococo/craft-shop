<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Page,Seo};
class PageController extends Controller
{
    //

    public $content = 'Page';

    public function index(){
        return response()->json([
            'pages' => (new Page)->getAll()
        ]);
    }

    public function show($link){
        $page=Page::select(['id','name','description'])
            ->whereSeo($link,$this->content)
            ->first();

        return $page!==NULL ? response()->json([
            'page' => $page ,
            'seo' => Seo::getSeo($this->content,$page->id)
        ]) : dataNotFound();
    }
}
