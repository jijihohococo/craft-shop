<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\AdminRolePermission;
abstract class CommonController extends Controller
{
    //
    use AdminRolePermission;

    public $multipleContent;

    public $mainData = 'name';

    public function __construct(){
        $this->authorized($this->model);
    }

    public function indexPage($data){
        return response()->json([
            $this->content => $data
        ]);
    }

    private function getContent(){
        return $this->multipleContent ?? $this->content;
    }

    public function deleteMultiple(Request $request){
        $content=$this->getContent();
        $request->validate([
            $content => ['required','string']
        ]);
        $list=explode(',', $request->{$this->content});
        $model='App\Models\\'.$this->model;
        $model::whereIn('id',$list)->delete();
        return response()->json([
            'message' => $this->model.' data are deleted'
        ]);
    }

    public function restoreMultiple(Request $request){
        $content=$this->getContent();
        $request->validate([
            $content => ['required','string']
        ]);
        $list=explode(',', $request->{$this->content});
        $model='App\Models\\'.$this->model;
        $model::withTrashed()->whereIn('id',$list)->restore();
        return response()->json([
            'message' => $this->model.' data are restored'
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
        $model='App\Models\\'.$this->model;
        $data=$model::withTrashed()->findOrFail($id);
        $data->delete();
        return response()->json([
          'message' => $data->{$this->mainData} . ' '.$this->model.' is deleted successfully',
          'deleted_at' => $data->deleted_at
      ]);
    }

    public function restore($id){
       $model='App\Models\\'.$this->model;
       $data=$model::withTrashed()->findOrFail($id);
       $data->restore();
       return response()->json([
          'message' => $data->{$this->mainData} . ' '.$this->model.' is restored successfully',
          'deleted_at' => $data->deleted_at
      ]);   
   }

}
