<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Role,RolePermission};
use App\Traits\AdminRolePermission;
use DB;
class RoleController extends Controller
{

    use AdminRolePermission;

    public function __construct(){
        $this->authorized(Role::$content);
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
            'roles' => Role::withTrashed()->latest('id')->paginate(10)
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
            'role' => new Role
        ]);
    }

    private function insertRolePermissions($permissions,$roleId){
        $rolePermissions=[];
        foreach($permissions as $permission){
            array_push($rolePermissions, [
                'role_id' => $roleId ,
                'permission_id' => $permission
            ]);
        }
        RolePermission::insert($rolePermissions);
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
        $role=Role::create($request->all());
        $this->insertRolePermissions($request->permissions,$role->id);
        DB::commit();
        return response()->json([
            'message' => $request->name .' Role is created successfully'
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
            'role' => Role::findOrFail($id) ,
            'permissions' => DB::table('permissions')
            ->select('id')->whereIn('id',function($query) use ($id){
                $query->select('permission_id')
                ->from('role_permissions')
                ->where('role_permissions.role_id',$id);
            })->where('permissions.deleted_at',null)
            ->get()
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
        $role=Role::findOrFail($id);
        $role->update($request->all());
        $permissions=$role->permissions->pluck('permission_id')->toArray();
        if( $permissions+$request->permissions!==$permissions ){
            RolePermission::where('role_id',$role->id )->delete();
            $this->insertRolePermissions($request->permissions,$role->id);
        }
        DB::commit();
        return response()->json([
            'message' => $request->name . ' Role is updated successfully' 
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
        $role=Role::withTrashed()->findOrFail($id);
        $role->delete();
        return response()->json([
          'message' => $role->name . ' Role is deleted successfully',
          'deleted_at' => $role->deleted_at
      ]);
    }

    public function restore($id){
       $role=Role::withTrashed()->findOrFail($id);
       $role->restore();
       return response()->json([
          'message' => $role->name . ' Role is restored successfully',
          'deleted_at' => $role->deleted_at
      ]);   
   }

   private function validateData($id=NULL){
    return [
        'name' => ['required', 'string', 'max:100', $id==null ? 'unique:roles' : 'unique:roles,name,'.$id ],
        'permissions' => ['required','array']
    ];
}

public function search(Request $request){
    $searchData='%'.$request->search.'%';
    return response()->json([
        'roles' => Role::withTrashed()->where('name','like',$searchData)
        ->latest('id')->paginate(10)
    ]);
}

public function get(){
    return response()->json([
        'roles' => Role::orderBy('name')->get()
    ]);
}
}
