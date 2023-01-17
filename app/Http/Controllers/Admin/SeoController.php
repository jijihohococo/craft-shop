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

    public function edit($model,$modelId){
        $seo=Seo::where('model',$model)
        ->where('model_id',$modelId)
        ->first();
        if($seo==NULL){
            return response()->json([
                'message' => 'Data not found'
            ],404);
        }
        $seoNames=$seo->names;
        $seoProperties=$seo->properties;
        return response()->json([
            'seo' => $seo ,
            'seo_names' => $seoNames->pluck('name'),
            'seo_name_contents' => $seoNames->pluck('content'),
            'seo_properties' => $seoProperties->pluck('name'),
            'seo_property_contents' => $seoProperties->pluck('content'),
            'keywords' => $seo->keywords->pluck('keyword')
        ]);
    }

    public function update(Request $request,Seo $seo){
        $request->validate($this->validateData());
        $this->keywords=$seo->keywords->pluck('keyword')->toArray();
        DB::beginTransaction();
        $seo->update([
            'title' => $request->title,
            'description' => $request->description,
            'type' => $request->type
        ]);
        $this->insertSeoKeywords($request->keywords,$seo->id,'yes');
        DB::commit();
        return response()->json([
            'message' => 'SEO is updated successfully'
        ]);
    }

    private function validateData(){
        return [
            'title' => ['required','string','max:100'],
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
