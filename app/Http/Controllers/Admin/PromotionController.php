<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Promotion;
use Carbon\Carbon;
use DB;
class PromotionController extends CommonController
{

    public $model = 'Promotion';

    public $content = 'promotions';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(
            Promotion::latest('id')->paginate(10)
        );
    }

    public function trash(){
        return $this->indexPage(
            Promotion::onlyTrashed()
            ->latest('id')
            ->paginate(10)
        );
    }

    public function create(){
        
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
        $promotion=Promotion::create($request->all());
        $this->seo->create([
            'title' => $request->name ,
            'description' => $request->name ,
            'type' => $request->name,
            'model' => $this->model,
            'model_id' => $promotion->id
        ]);
        DB::commit();
        return response()->json([
            'message' => $request->name . ' Promotion is created successfully'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Promotion $promotion)
    {
        //
        return response()->json([
            'promotion' => $promotion
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Promotion $promotion)
    {
        //
        $request->validate($this->validateData($promotion->id));
        $promotion->update($request->all());
        return response()->json([
            'message' => $request->name . ' Promotion is updated successfully'
        ]);

    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Promotion::searchWithName($searchData)
            ->orWhere('promo_code','like',$searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Promotion::onlyTrashed()
            ->searchWithCreate($searchData)
            ->trashSearchWithName($searchData)
            ->orWhere('promo_code','like',$searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function get(){
        return $this->indexPage(
            (new Promotion)->getAll()
        );
    }

    private function validateData($id=NULL){
        return [
            'name' => uniqueColumn($this->content,$id) ,
            'promo_code' => ['nullable','max:100'],
            'banner_id' => ['nullable','integer'],
            'promotion_start_time' => ['required'],
            'promotion_end_time' => ['required']
        ];
    }
}
