<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Admin,AdminRole};
use App\Traits\AdminRolePermission;
use DB;
class AdminController extends Controller
{
    use AdminRolePermission;

    private $roles=[];

    public function __construct(){
        $this->authorized('Admin');
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
            'admins' => Admin::latest('id')->paginate(10)
        ]);
    }

    public function trash(){
        return response()->json([
            'admins' => Admin::onlyTrashed()
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

    private function insertAdminRoles($roles,$adminId,$update=NULL){
        add_high_light([
            'col'=>$roles,
            'old_col' => $this->roles ,
            'obj' => 'App\Models\AdminRole',
            'parent_id'=>'admin_id',
            'parent_data'=>$adminId,
            'child_col'=>'role_id',
            'update'=> $update
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
        DB::beginTransaction();
        $admin=Admin::create($request->all());
        $this->insertAdminRoles($request->roles,$admin->id);
        DB::commit();
        return response()->json([
            'message' => $request->name . ' Admin is created successfully' 
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
            'admin' => Admin::findOrFail($id)
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
        DB::beginTransaction();
        $admin=Admin::findOrFail($id);
        $admin->update($request->all());
        $this->roles=$admin->roles->pluck('role_id')->toArray();
        $this->insertAdminRoles($request->roles,$id,'yes');
        DB::commit();
        return response()->json([
            'message' => $request->name . ' Admin is updated successfully' 
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
        $admin=Admin::withTrashed()->findOrFail($id);
        $admin->delete();
        return response()->json([
          'message' => $admin->name . ' Admin is deleted successfully',
          'deleted_at' => $admin->deleted_at
      ]);
    }

    public function restore($id)
    {
        //
        $admin=Admin::withTrashed()->findOrFail($id);
        $admin->restore();
        return response()->json([
          'message' => $admin->name . ' Admin is restored successfully',
          'deleted_at' => $admin->deleted_at
      ]);
    }

    private function validateData($id=NULL){
        return [
            'name' => 'required|string|max:100',
            'email' => ['required', 'email' , 'max:100', $id==null ? 'unique:admins' : 'unique:admins,email,'.$id ] ,
            'roles' => ['required','array']
        ];
    }

    public function get(){
        $admin=auth('admin_api')->user();
        return $admin!==NULL ? response()->json([
            'admin' => $admin
        ]) : unauthenticated() ;
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'admins' => Admin::searchWithName($searchData)
            ->searchWithEmail($searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'admins' => Admin::onlyTrashed()
            ->searchWithName($searchData)
            ->searchWithEmail($searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function deleteMultiple(Request $request){
        $request->validate([
            'admins' => ['required','string']
        ]);
        $admins=explode(',', $request->admins);
        Admin::whereIn('id',$admins)->delete();
        return response()->json([
            'message' => 'Admins are deleted'
        ]);
    }

    public function restoreMultiple(Request $request){
        $request->validate([
            'admins' => ['required','string']
        ]);
        $admins=explode(',', $request->admins);
        Admin::withTrashed()->whereIn('id',$admins)->restore();
        return response()->json([
            'message' => 'Admins are restored'
        ]);
    }
}
