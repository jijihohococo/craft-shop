<?php

namespace App\Http\Controllers\Admin;


use Illuminate\Http\Request;
use App\Models\{Attribute,AttributeSet,ItemAttributeSet};
use DB;
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
        return $this->indexPage(
            Attribute::latest('id')->paginate(10)
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
        DB::beginTransaction();
        $attribute=Attribute::create($request->all());
        $this->addAttributeSets($request->sets , $attribute->id);
        $this->seo->create([
            'title' => $request->name ,
            'model' => $this->model,
            'model_id' => $attribute->id
        ]);
        DB::commit();
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
    public function edit(Attribute $attribute)
    {
        //
        return response()->json([
            'attribute' => $attribute ,
            'sets' => $attribute->sets->pluck('set')
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Attribute $attribute)
    {
        //
        $request->validate($this->validateData($attribute->id));
        DB::beginTransaction();
        $attribute->update($request->all());
        $this->sets=$attribute->sets->pluck('set')->toArray();
        $this->addAttributeSets($request->sets , $attribute->id,'yes');
        DB::commit();
        return response()->json([
            'message' => $request->name . ' Attribute is updated successfully'
        ]);
    }

    private function validateData($id=NULL){
        return [
            'name' => uniqueColumn($this->content,$id) ,
            'set' => ['array']
        ];
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Attribute::searchWithName($searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
           Attribute::onlyTrashed()
            ->searchWithCreate($searchData)
            ->trashSearchWithName($searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        );
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
        return $this->indexPage(
            (new Attribute)->getAll()
        );
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
        return $this->indexPage(
            Attribute::onlyTrashed()->latest('id')->paginate(10)
        );
    }
}
