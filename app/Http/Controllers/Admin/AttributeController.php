<?php

namespace App\Http\Controllers\Admin;


use Illuminate\Http\Request;
use App\Models\{Attribute,AttributeSet,ItemAttributeSet};
class AttributeController extends CommonController
{

    private $sets=[];

    public $model = 'Attribute';

    public $content = 'attributes';

    public $multipleContent = 'data_attributes';

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
        $attribute=Attribute::findOrFail($id);
        $attribute->update($request->all());
        $this->sets=$attribute->sets->pluck('set')->toArray();
        $this->addAttributeSets($request->sets , $id,'yes');
        return response()->json([
            'message' => $request->name . ' Attribute is updated successfully'
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
            'attributes' => Attribute::searchWithName($searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'attributes' => Attribute::onlyTrashed()
            ->searchWithName($searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    private function addAttributeSets($sets,$id,$update=null){
        add_high_light([
            'col'=>$sets,
            'old_col' => $this->sets ,
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
            'sets' => (new AttributeSet)->getByAttributeId($attributeId)
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
}
