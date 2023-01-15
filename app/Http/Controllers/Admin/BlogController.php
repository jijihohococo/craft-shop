<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Blog;
use App\Repositories\SeoRepositoryInterface;
use DB;
class BlogController extends CommonController
{

    public $model = 'Blog';

    public $content = 'blogs';

    private $seo;

    public function __construct(SeoRepositoryInterface $seo){
        parent::__construct($seo);
        $this->seo=$seo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(
            Blog::selectSeo()->latest('id')->paginate(10)
        );
    }

    public function trash(){
        return $this->indexPage(
            Blog::onlyTrashed()
            ->selectSeo()
            ->latest('id')
            ->paginate(10)
        );
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Blog::selectSeo()
            ->searchWithName($searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Blog::onlyTrashed()
            ->selectSeo()
            ->searchWithCreate($searchData)
            ->trashSearchWithName($searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate($this->validateData());
        Blog::create($request->all());
        return response()->json([
            'message' => $request->name . ' Blog is created successfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Blog $blog)
    {
        //
        return response()->json([
            'blog' => $blog
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Blog $blog)
    {
        //
        $request->validate($this->validateData($blog->id));
        $blog->update($request->all());
        return response()->json([
            'message' => $blog->name . ' Blog is updated successfully'
        ]);
    }

    private function validateData($id=NULL){
        return  [
            'name' => uniqueColumn($this->content,$id),
            'content' => ['required','string','max:4294967295']
        ];
    }
}
