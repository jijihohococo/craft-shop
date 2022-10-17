<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Shop;
use App\Traits\AdminRolePermission;
class ShopController extends Controller
{
    use AdminRolePermission;

    public function __construct(){
        $this->authorized('Shop');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return  response()->json([
            'message' => 'Success'
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
        return  response()->json([
            'message' => 'Success'
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Shop $shop)
    {
        //
        $request->validate($this->validateData($shop->id));
        $newShop=new Shop($request->all());
        oneFileUpload(['file' => 'pic',
            'name'=> cutSpeicialChar(rand() . $request->name) ,
            'path'=>'shop_images',
            'old_file'=> $shop->pic , 
            'width'  => 182 , 
            'height' => 47 ],$request,$newShop );
        $shop->update($newShop->getAttributes());
        return response()->json([
            'message' => $request->name . ' Shop is updated successfully' ,
            'pic' => $shop->pic
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
    }

    private function validateData($id){
        return [
            'name' => 'required|string|max:100',
            'phone' => 'required|string|max:30',
            'email' => ['required', 'email' , 'max:100',
            'unique:shops,email,'.$id ] ,
            'address' => 'required|string|max:100' ,
            'pic' => nullableImage()
        ];
    }
}
