<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Traits\AdminRolePermission;
class CategoryController extends Controller
{
    use AdminRolePermission;

    public function __construct(){
        $this->authorized('Category');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json([
            'categories' => Category::latest('id')->paginate(10)
        ]);
    }

    public function trash(){
        return response()->json([
            'categories' => Category::onlyTrashed()
            ->latest('id')
            ->paginate(10)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return response()->json([
            'category' => new Category
        ]);
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
        Category::create($request->all());
        return response()->json([
            'message' => $request->name .' Category is created successfully'
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
    public function edit($id)
    {
        //
        return response()->json([
            'category' => Category::findOrFail($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $request->validate($this->validateData($id));
        Category::findOrFail($id)->update($request->all());
        return response()->json([
            'message' => $request->name . ' Category is updated successfully' 
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $category=Category::withTrashed()->findOrFail($id);
        $category->delete();
        return response()->json([
            'message' => $category->name . ' Category is deleted successfully',
            'deleted_at' => $category->deleted_at
        ]);
        
    }

    public function restore($id){
     $category=Category::withTrashed()->findOrFail($id);
     $category->restore();
     return response()->json([
      'message' => $category->name . ' Category is restored successfully',
      'deleted_at' => $category->deleted_at
  ]);   
 }

 private function validateData($id=NULL){
    return [
        'name' => ['required', 'string', 'max:100', $id==null ? 'unique:categories' : 'unique:categories,name,'.$id ]
    ];
}

public function search(Request $request){
    return response()->json([
        'categories' => Category::searchWithName('%'.$request->search.'%')->latest('id')->paginate(10)
    ]);
}

public function trashSearch(Request $request){
    return response()->json([
        'categories' => Category::onlyTrashed()
        ->searchWithName('%'.$request->search.'%')
        ->latest('id')
        ->paginate(10)
    ]);
}

public function get(){
    return response()->json([
        'categories' => (new Category)->getWithSubcategories()
    ]);
}

public function deleteMultiple(Request $request){
    $request->validate([
        'categories' => ['required','string']
    ]);
    $categories=explode(',', $request->categories);
    Category::whereIn('id',$categories)->delete();
    return response()->json([
        'message' => 'Categories are deleted'
    ]);
}

public function restoreMultiple(Request $request){
    $request->validate([
        'categories' => ['required','string']
    ]);
    $categories=explode(',', $request->categories);
    Category::withTrashed()->whereIn('id',$categories)->restore();
    return response()->json([
        'message' => 'Categories are restored'
    ]);
}
}
