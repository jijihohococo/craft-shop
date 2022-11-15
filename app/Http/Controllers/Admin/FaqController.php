<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Faq;
use DB;
class FaqController extends Controller
{
    //
    public $model = 'Faq';

    public function __construct(){
        $this->middleware('rolePermission:'.$this->model.',read')->only(['index']);
        $this->middleware('rolePermission:'.$this->model.',update')->only(['edit','update']);
    }

    public function index(){
        return response()->json([
            'message' => 'Success'
        ]);
    }

    private function insertData($request){
        $insertData=[];
        foreach(array_filter($request->questions) as $key => $question){
            $insertData[]=[
                'question' => $question,
                'answer' => isset($request->answers[$key]) ?
                $request->answers[$key] : '-',
                'created_at' => NOW(),
                'updated_at' => NOW()
            ];
        }
        if(!empty($insertData)){
            Faq::insert($insertData);
        }
    }

    public function edit(){
        $faqs=Faq::get();
        return response()->json([
            'questions' => $faqs->pluck('question'),
            'answers' => $faqs->pluck('answer')
        ]);
    }

    public function update(Request $request)
    {
        //
        DB::beginTransaction();
        Faq::truncate();
        $this->insertData($request);
        DB::commit();
        return response()->json([
            'message' => 'FAQ is updated successfully'
        ]);
    }
}
