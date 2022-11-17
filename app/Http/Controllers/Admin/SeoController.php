<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Seo;
use DB;
class SeoController extends Controller
{
    //
    public function update(Request $request,Seo $seo){
        $request->validate($this->validateData($seo->id));
        DB::beginTransaction();
        $seo->update([
            'title' => $request->title,
            'description' => $request->description,
            'type' => $request->type
        ]);
        DB::commit();
        return response()->json([
            'message' => 'SEO is updated successfully'
        ]);
    }

    private function validateData($id){
        return [

        ];
    }
}
