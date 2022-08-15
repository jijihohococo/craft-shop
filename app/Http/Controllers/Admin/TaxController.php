<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tax;
use App\Traits\AdminRolePermission;
class TaxController extends Controller
{
    use AdminRolePermission;
    
    public function __construct(){
        $this->authorized('Tax');
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
            'taxes' => Tax::latest('id')->paginate(10)
        ]);
    }

    public function trash(){
        return response()->json([
            'taxes' => Tax::onlyTrashed()
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
        Tax::create($request->all());
        return response()->json([
            'message' => $request->name .' Tax is created successfully'
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
            'tax' => Tax::findOrFail($id)
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
        Tax::findOrFail($id)->update($request->all());
        return response()->json([
            'message' => $request->name .' Tax is updated successfully'
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
        $tax=Tax::withTrashed()->findOrFail($id);
        $tax->delete();
        return response()->json([
          'message' => $tax->name .' Tax is deleted successfully',
          'deleted_at' => $tax->deleted_at
      ]);
    }

    public function restore($id){
        $tax=Tax::withTrashed()->findOrFail($id);
        $tax->restore();
        return response()->json([
          'message' => $tax->name .' Tax is restored successfully',
          'deleted_at' => $tax->deleted_at
      ]);
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'taxes' => Tax::searchWithName($searchData)
            ->orWhere('rate','like',$searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'taxes' => Tax::onlyTrashed()
            ->searchWithName($searchData)
            ->orWhere('rate','like',$searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function get(Request $request){
        return response()->json([
            'taxes' => (new Tax)->getAll()
        ]);
    }

    private function validateData($id=NULL){
        return [
            'name' => ['required', 'string', 'max:100', $id==null ? 'unique:taxes' : 'unique:taxes,name,'.$id ] ,
            'rate' => 'required|numeric|between:0.000,999999999.9999'
        ];
    }

    public function deleteMultiple(Request $request){
        $request->validate([
            'taxes' => ['required','string']
        ]);
        $taxes=explode(',', $request->taxes);
        Tax::whereIn('id',$taxes)->delete();
        return response()->json([
            'message' => 'Taxes are deleted'
        ]);
    }

    public function restoreMultiple(Request $request){
        $request->validate([
            'taxes' => ['required','string']
        ]);
        $taxes=explode(',', $request->taxes);
        Tax::withTrashed()->whereIn('id',$taxes)->restore();
        return response()->json([
            'message' => 'Taxes are restored'
        ]);
    }
}
