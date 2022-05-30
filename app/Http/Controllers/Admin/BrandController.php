<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brand;
use App\Traits\AdminRolePermission;
class BrandController extends Controller
{
    use AdminRolePermission;

    public function __construct(){
        $this->authorized(Brand::$content);
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
            'brands' => Brand::withTrashed()->latest('id')->paginate(10)
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
    public function store(Request $request)
    {
        //
        $request->validate($this->validateData());
        $brand=new Brand($request->all() );
        oneFileUpload(['file' => 'pic',
            'name'=> cutSpeicialChar(rand() . $request->name) ,
            'path'=>'brand_images',
            'old_file'=>null , 
            'width'  => null , 
            'height' => null ],$request,$brand );
        $brand->save( $brand->getAttributes() );
        return response()->json([
            'message' => $brand->name . ' Brand is created successfully'
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
            'brand' => Brand::findOrFail($id)
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
        $brand = Brand::findOrFail($id);
        $newBrand=new Brand($request->all());
        oneFileUpload(['file' => 'pic',
            'name'=> cutSpeicialChar(rand() . $request->name) ,
            'path'=>'brand_images',
            'old_file'=> $brand->pic , 
            'width'  => null , 
            'height' => null ],$request,$newBrand );
        $brand->update($newBrand->getAttributes());
        return response()->json([
            'message' => $request->name . ' Brand is updated successfully'
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
        $brand=Brand::withTrashed()->findOrFail($id);
        $brand->destroy();
        return response()->json([
          'message' => $brand->name . ' Brand is deleted successfully',
          'deleted_at' => $brand->deleted_at
      ]);
    }

    public function restore($id)
    {
        //
        $brand=Brand::withTrashed()->findOrFail($id);
        $brand->restore();
        return response()->json([
          'message' => $brand->name . ' Brand is restored successfully',
          'deleted_at' => $brand->deleted_at
      ]);
    }

    private function validateData($id=NULL){
        return [
            'name' => ['required', 'string', 'max:100', $id==null ? 'unique:brands' : 'unique:brands,name,'.$id ] ,
            'pic' => $id==null ? requiredImage() : nullableImage()
        ];
    }

    public function search(Request $request){
        return response()->json([
            'brands' => Brand::withTrashed()
            ->where('name','like','%'.$request->search.'%')
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function get(){
        return response()->json([
            'brands' => (new Brand)->getAll()
        ]);
    }
}
