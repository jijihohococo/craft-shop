<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Attribute,AttributeSet,ItemAttributeSet};
use App\Traits\AdminRolePermission;
class AttributeController extends Controller
{

    use AdminRolePermission;

    public function __construct(){
        $this->authorized(Attribute::$content);
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
            'attributes' => Attribute::latest('id')->paginate(10)
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
        $attribute=Attribute::create($request->all());
        $this->addAttributeSets($request->sets , $attribute->id);
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
            'attribute' => Attribute::findOrFail($id) ,
            'sets' => AttributeSet::select('set')->where('attribute_id',$id)->get()->pluck('set')
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
        $this->addAttributeSets($request->sets , $id,'yes');
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
            'set' => ['array']
        ];
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'attributes' => Attribute::where('name','like',$searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'attributes' => Attribute::onlyTrashed()
            ->where('name','like',$searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    private function addAttributeSets($sets,$id,$update=null){
        add_high_light([
            'col'=>$sets,
            'obj' => 'App\Models\AttributeSet',
            'parent_id'=>'attribute_id',
            'parent_data'=>$id,
            'child_col'=>'set',
            'update'=> $update
        ]);
    }

    public function get(){
        return response()->json([
            'attributes' => (new Attribute)->getAll()
        ]);
    }

    public function getAtrributeSets($attributeId){
        return response()->json([
            'sets' => AttributeSet::where('attribute_id',$attributeId)->get()
        ]);
    }

    public function getItemAttributeSets($itemAttributeId){
        return response()->json([
            'selectedSets' => ItemAttributeSet::select('set_id')->where('item_attribute_id',$itemAttributeId)->get()->pluck('set_id')
        ]);
    }

    public function trash(){
        return response()->json([
            'attributes' => Attribute::onlyTrashed()->latest('id')->paginate(10)
        ]);
    }

    public function deleteMultiple(Request $request){
        $request->validate([
            'data_attributes' => ['required','string']
        ]);
        $attributes=explode(',', $request->data_attributes);
        Attribute::whereIn('id',$attributes)->delete();
        return response()->json([
            'message' => 'Attributes are deleted'
        ]);
    }

    public function restoreMultiple(Request $request){
        $request->validate([
            'data_attributes' => ['required','string']
        ]);
        $attributes=explode(',', $request->data_attributes);
        Attribute::withTrashed()->whereIn('id',$attributes)->restore();
        return response()->json([
            'message' => 'Attributes are restored'
        ]);
    }
}
