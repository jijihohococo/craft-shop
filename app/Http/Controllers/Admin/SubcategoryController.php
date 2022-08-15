<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Subcategory,Category};
use App\Traits\AdminRolePermission;
class SubcategoryController extends Controller
{

    use AdminRolePermission;

    public function __construct(){
        $this->authorized('Subcategory');
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
            'subcategories' => Subcategory::latest('id')
            ->selectCategory()
            ->paginate(10)
        ]);
    }

    public function trash(){
        return response()->json([
            'subcategories' => Subcategory::onlyTrashed()
            ->selectCategory()
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
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    private function validateData($id=NULL){
        return [
            'name' => ['required', 'string', 'max:100', $id==null ? 'unique:subcategories' : 'unique:subcategories,name,'.$id ] ,
            'category_id' => ["required","integer"]
        ];
    }
    public function store(Request $request)
    {
        //
        $request->validate($this->validateData());
        Subcategory::create($request->all());
        return response()->json([
            'message' => $request->name .' Subcategory is created successfully'
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
            'subcategory' => Subcategory::findOrFail($id)
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
        Subcategory::findOrFail($id)->update($request->all());
        return response()->json([
            'message' => $request->name . ' Subcategory is updated successfully'
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
        $subcategory=Subcategory::withTrashed()->findOrFail($id);
        $subcategory->delete();
        return response()->json([
            'message' => $subcategory->name . ' Subcategory is deleted successfully',
            'deleted_at' => $subcategory->deleted_at
        ]);
    }

    public function restore($id){
     $subcategory=Subcategory::withTrashed()->findOrFail($id);
     $subcategory->restore();
     return response()->json([
      'message' => $subcategory->name . ' Subcategory is restored successfully',
      'deleted_at' => $subcategory->deleted_at
  ]);   
 }

 public function search(Request $request){
    $searchData='%'.$request->search.'%';
    return response()->json([
        'subcategories' => Subcategory::selectCategory()
        ->searchWithName($searchData)
        ->searchWithCategory($searchData)
        ->searchCreateAndUpdate($searchData)
        ->latest('id')
        ->paginate(10)
    ]);
}

public function trashSearch(Request $request){
    $searchData='%'.$request->search.'%';
    return response()->json([
        'subcategories' => Subcategory::onlyTrashed()
        ->selectCategory()
        ->searchWithName($searchData)
        ->searchWithCategory($searchData)
        ->searchDelete($searchData)
        ->latest('id')
        ->paginate(10)
    ]);
}

public function get($categoryId){
    return response()->json([
        'subcategories' => (new Subcategory)->getByCategoryId($categoryId)
    ]);
}

public function getAll(){
    return response()->json([
        'subcategories' => (new Subcategory)->getAll()
    ]);
}

public function deleteMultiple(Request $request){
    $request->validate([
        'subcategories' => ['required','string']
    ]);
    $subcategories=explode(',', $request->subcategories);
    Subcategory::whereIn('id',$subcategories)->delete();
    return response()->json([
        'message' => 'Subcategories are deleted'
    ]);
}

public function restoreMultiple(Request $request){
    $request->validate([
        'subcategories' => ['required','string']
    ]);
    $subcategories=explode(',', $request->subcategories);
    Subategory::withTrashed()->whereIn('id',$subcategories)->restore();
    return response()->json([
        'message' => 'Subcategories are restored'
    ]);
}
}
