<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Role;
use DB;
class RoleController extends CommonController
{

    private $permissions=[];

    public $model ='Role';

    public $content = 'roles';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(
            Role::latest('id')->paginate(10)
        );
    }

    public function trash(){
        return $this->indexPage(
            Role::onlyTrashed()
            ->latest('id')
            ->paginate(10)
        );
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

    private function insertRolePermissions($permissions,$roleId,$update=NULL){
        
        add_high_light([
            'col'=>$permissions,
            'old_col' => $this->permissions ,
            'obj' => 'App\Models\RolePermission',
            'parent_id'=>'role_id',
            'parent_data'=>$roleId,
            'child_col'=>'permission_id',
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
        $this->permissions=$role->permissions->pluck('permission_id')->toArray();
        $this->insertRolePermissions($request->permissions,$role->id,'yes');
        DB::commit();
        return response()->json([
            'message' => $request->name . ' Role is updated successfully' 
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
    return $this->indexPage(
        Role::searchWithName($searchData)
        ->searchCreateAndUpdate($searchData)
        ->latest('id')
        ->paginate(10)
    );
}

public function trashSearch(Request $request){
    $searchData='%'.$request->search.'%';
    return $this->indexPage(
        Role::onlyTrashed()
        ->searchWithName($searchData)
        ->searchDelete($searchData)
        ->latest('id')->paginate(10)
    );
}

public function get(){
    return $this->indexPage(
        (new Role)->getAll()
    );
}
}
