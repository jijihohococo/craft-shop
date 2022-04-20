<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attribute;
class AttributeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json([
            'attributes' => Attribute::withTrashed()->latest('id')->paginate(10)
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
        Attribute::create($request->all());
        return response()->json([
            'message' => $request->name . ' Attribute is created successfully'
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
            'attribute' => Attribute::findOrFail($id)
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
        Attribute::findOrFail($id)->update($request->all());
        return response()->json([
            'message' => $request->name . ' Attribute is updated successfully'
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
        $attribute=Attribute::withTrashed()->findOrFail($id);
        $attribute->delete();
        return response()->json([
          'message' => $attribute->name . ' Attribute is deleted successfully',
          'deleted_at' => $attribute->deleted_at
      ]);
    }

    public function restore($id)
    {
        //
        $attribute=Attribute::withTrashed()->findOrFail($id);
        $attribute->restore();
        return response()->json([
          'message' => $attribute->name . ' Attribute is restored successfully',
          'deleted_at' => $attribute->deleted_at
      ]);
    }

    private function validateData($id=NULL){
        return [
            'name' => ['required', 'string', 'max:100', $id==null ? 'unique:attributes' : 'unique:attributes,name,'.$id ] ,
        ];
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'attributes' => Attribute::withTrashed()
            ->where('name','like',$searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }
}
