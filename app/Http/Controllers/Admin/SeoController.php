<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Seo;
use DB;
class SeoController extends Controller
{
    //
    private $keywords=[];

    public function __construct(){
        $this->middleware('rolePermission:Seo,update')->only(['edit','update']);
    }

    private function insertSeoKeywords($keywords,$seoId,$update=NULL){
        add_high_light([
            'col'=>$keywords,
            'old_col' => $this->keywords ,
            'obj' => 'App\Models\SeoKeyword',
            'parent_id'=>'seo_id',
            'parent_data'=>$seoId,
            'child_col'=>'keyword',
            'update'=> $update
        ]);
    }

    private function insertSeoNames(){

    }

    private function insertSeoProperties(){

    }

    public function edit(string $model,int $modelId){
        $seo=Seo::getSeo($model,$modelId);
        $model='App\Models\\'.$model;
        $modelData=$model::findOrFail($modelId);
        if($seo==NULL && $modelData!==NULL ){
            return response()->json([
                'message' => 'Data is not found'
            ],404);
        }
        $seoNames=[];
        $seoProperties=[];
        if($seo!==NULL){
            $seoNames=$seo->names;
            $seoProperties=$seo->properties;
            $seoKeywords=$seo->keywords;
            return response()->json([
                'seo' => $seo ,
                'seo_names' => $seoNames->pluck('name'),
                'seo_name_contents' => $seoNames->pluck('content'),
                'seo_properties' => $seoProperties->pluck('name'),
                'seo_property_contents' => $seoProperties->pluck('content'),
                'keywords' => $seo->keywords->pluck('keyword')
            ]);
        }
    }

    public function update(Request $request,string $model,int $modelId){
        $newModel='App\Models\\'.$model;
        $newModelData=$newModel::findOrFail($modelId);
        $request->validate($this->validateData());
        DB::beginTransaction();
        $seo=Seo::updateOrCreate([
            'model' => $model,
            'model_id' => $modelId
        ],[
            'title' => $request->title,
            'page_link' => $request->page_link,
            'description' => $request->description,
            'type' => $request->type
        ]);
        $this->keywords=$seo==NULL ? [] : $seo->keywords->pluck('keyword')->toArray();
        $this->insertSeoKeywords($request->keywords,$seo->id,'yes');
        DB::commit();
        return response()->json([
           'message' => 'SEO is updated successfully'
       ]);

    }

    // public function update(Request $request,Seo $seo){
    //     $request->validate($this->validateData());
    //     $this->keywords=$seo->keywords->pluck('keyword')->toArray();
    //     DB::beginTransaction();
    //     $seo->update([
    //         'title' => $request->title,
    //         'description' => $request->description,
    //         'type' => $request->type
    //     ]);
    //     $this->insertSeoKeywords($request->keywords,$seo->id,'yes');
    //     DB::commit();
    //     return response()->json([
    //         'message' => 'SEO is updated successfully'
    //     ]);
    // }

    private function validateData(){
        $linkValidation=uniqueColumn($this->content,$id,'page_link');
        $linkValidation[]='alpha_dash';
        return [
            'title' => ['required','string','max:100'],
            'page_link' => $linkValidation,
            'description' => ['required','string','max:100'],
            'type' => ['required','string','max:100'],
            'keyword' => ['array','min:1'],
            'name_names' => ['array','min:1'],
            'name_contents' => ['array','min:1'],
            'property_names' => ['array','min:1'],
            'property_contents' => ['array','min:1']
        ];
    }
}
