<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Faq,Transaction,UserData};
use DB;
use Illuminate\Support\Facades\Cache;
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
        $faqs=(new Faq)->getAll();
        return response()->json([
            'questions' => $faqs->pluck('question'),
            'answers' => $faqs->pluck('answer')
        ]);
    }

    public function update(Request $request)
    {
        //
        $request->validate($this->validateData());
        DB::beginTransaction();
        Faq::truncate();
        $this->insertData($request);
        $this->insertTransaction();
        DB::commit();
        $this->cacheFlush();
        return response()->json([
            'message' => 'FAQ is updated successfully'
        ]);
    }

    private function insertTransaction(){
        Transaction::create([
         'guard' =>  UserData::getGuard(),
         'user_id' => UserData::getId(),
         'model' => $this->model ,
         'model_id' => 1,
         'action' => 'update' ,
         'created_at' => NOW() ,
         'updated_at' => NOW()
     ]);
    }

    private function cacheFlush(){
        Cache::tags(Faq::$cacheKey )->flush();
    }

    private function validateData(){
        return [
            'questions' => ['required','array','min:1'],
            'answers' => ['required','array','min:1']
        ];
    }
}
