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
        $this->authorized(Target::$content);
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
            'targets' => Target::withTrashed()->latest('id')->paginate(10)
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
        return response()->json([
            'target' => new Target
        ]);
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
            'targets' => Target::withTrashed()
            ->where('name','like',$searchData)
            ->orWhere('duration','like',$searchData)
            ->latest('id')->paginate(10)
        ]);
    }
}
