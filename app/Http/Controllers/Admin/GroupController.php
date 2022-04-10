<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Group;
use App\Traits\AdminRolePermission;
class GroupController extends Controller
{
    use AdminRolePermission;

    public function __construct(){
       $this->authorized(Group::$content);
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
            'groups' => Group::withTrashed()->latest('id')->paginate(10)
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
            'group' => new Group
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
        Group::create($request->all());
        return response()->json([
            'message' => $request->name .' Group is created successfully'
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
            'group' => Group::findOrFail($id)
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
        Group::findOrFail($id)->update($request->all());
        return response()->json([
            'message' => $request->name . ' Group is updated successfully' 
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
        $group=Group::withTrashed()->findOrFail($id);
        $group->delete();
        return response()->json([
          'message' => $group->name . ' Group is deleted successfully',
          'deleted_at' => $group->deleted_at
        ]);
    }

    public function restore($id){
       $group=Group::withTrashed()->findOrFail($id);
       $group->restore();
       return response()->json([
          'message' => $group->name . ' Group is restored successfully',
          'deleted_at' => $group->deleted_at
      ]);   
   }

    private function validateData($id=NULL){
        return [
            'name' => ['required', 'string', 'max:100', $id==null ? 'unique:groups' : 'unique:groups,name,'.$id ],
            'color_code' => ['required','string']
        ];
    }

    public function search(Request $request){
        return response()->json([
            'groups' => Group::withTrashed()->where('name','like','%'.$request->search.'%')->latest('id')->paginate(10)
        ]);
    }
}
