<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Target;
use App\Traits\AdminRolePermission;
class TargetController extends Controller
{
    use AdminRolePermission;

    public function __construct(){
        $this->authorized('Target');
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
            'targets' => Target::latest('id')->paginate(10)
        ]);
    }

    public function trash(){
        return response()->json([
            'targets' => Target::onlyTrashed()
            ->latest('id')
            ->paginate(10)
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
        Target::create($request->all());
        return response()->json([
            'message' => $request->name .' Target is created successfully'
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
            'target' => Target::findOrFail($id)
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
        Target::findOrFail($id)->update($request->all());
        return response()->json([
            'message' => $request->name . ' Target is updated successfully'
        ]);
    }

    private function validateData($id=NULL){
        return [
            'name' => ['required', 'string', 'max:100', $id==null ? 'unique:targets' : 'unique:targets,name,'.$id ],
            'duration' => ['required','string','max:100']
        ];
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
        $target=Target::withTrashed()->findOrFail($id);
        $target->delete();
        return response()->json([
          'message' => 'Target ' . $target->name . ' is deleted Successfully',
          'deleted_at' => $target->deleted_at
      ]);
    }

    public function restore($id){
     $target=Target::withTrashed()->findOrFail($id);
     $target->restore();
     return response()->json([
      'message' => $target->name . ' Target is restored successfully',
      'deleted_at' => $target->deleted_at
  ]);   
 }

 public function search(Request $request){
    $searchData='%'.$request->search .'%';
    return response()->json([
        'targets' => Target::where('name','like',$searchData)
        ->orWhere('duration','like',$searchData)
        ->latest('id')->paginate(10)
    ]);
}

public function trashSearch(Request $request){
    $searchData='%'.$request->search .'%';
    return response()->json([
        'targets' => Target::onlyTrashed()
        ->where('name','like',$searchData)
        ->orWhere('duration','like',$searchData)
        ->latest('id')->paginate(10)
    ]);
}

public function deleteMultiple(Request $request){
    $request->validate([
        'targets' => ['required','string']
    ]);
    $targets=explode(',', $request->targets);
    Target::whereIn('id',$targets)->delete();
    return response()->json([
        'message' => 'Targets are deleted'
    ]);
}

public function restoreMultiple(Request $request){
    $request->validate([
        'targets' => ['required','string']
    ]);
    $targets=explode(',', $request->targets);
    Target::withTrashed()->whereIn('id',$targets)->restore();
    return response()->json([
        'message' => 'Targets are restored'
    ]);
}
}
