<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Brand;
class BrandController extends CommonController
{

    public $model = 'Brand';

    public $content = 'brands';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json([
            'brands' => Brand::latest('id')->paginate(10)
        ]);
    }

    public function trash(){
        return response()->json([
            'brands' => Brand::onlyTrashed()
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
    public function store(Request $request)
    {
        //
        $request->validate($this->validateData());
        $brand=new Brand($request->all() );
        oneFileUpload(['file' => 'pic',
            'name'=> cutSpeicialChar(rand() . $request->name) ,
            'path'=>'brand_images',
            'old_file'=>null , 
            'width'  => 138 , 
            'height' => 80 ],$request,$brand );
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
            'width'  => 138 , 
            'height' => 80 ],$request,$newBrand );
        $brand->update($newBrand->getAttributes());
        return response()->json([
            'message' => $request->name . ' Brand is updated successfully'
        ]);
    }

    private function validateData($id=NULL){
        return [
            'name' => ['required', 'string', 'max:100', $id==null ? 'unique:brands' : 'unique:brands,name,'.$id ] ,
            'pic' => $id==null ? requiredImage() : nullableImage()
        ];
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'brands' => Brand::searchWithName($searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'brands' => Brand::onlyTrashed()
            ->searchWithName($searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }
}
