<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Permission,TokenRefresh,Admin};
use App\Traits\{RolePermission,AdminRolePermission};

class PermissionController extends Controller
{

    use RolePermission,AdminRolePermission;
    
    public function __construct(){
        $this->authorized(Permission::$content);
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
            'permissions' => Permission::latest('id')->paginate(10)
        ]);
    }

    public function trash(){
        return response()->json([
            'permissions' => Permission::onlyTrashed()
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
        return response()->json([
            'permission' => new Permission
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
        Permission::create($request->all());
        return response()->json([
            'message' => $request->name .' Permission is created successfully'
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
            'permission' => Permission::findOrFail($id)
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
        Permission::findOrFail($id)->update($request->all());
        return response()->json([
            'message' => $request->name . ' Permission is updated successfully' 
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
        $permission=Permission::withTrashed()->findOrFail($id);
        $permission->delete();
        return response()->json([
          'message' => $permission->name . ' Permission is deleted successfully',
          'deleted_at' => $permission->deleted_at
      ]);
    }

    public function restore($id){
       $permission=Permission::withTrashed()->findOrFail($id);
       $permission->restore();
       return response()->json([
          'message' => $permission->name . ' Permission is restored successfully',
          'deleted_at' => $permission->deleted_at
      ]);   
   }

   private function validateData($id=NULL){
    return [
        'name' => ['required', 'string', 'max:100', $id==null ? 'unique:permissions' : 'unique:permissions,name,'.$id ],
        'model' => [
            'in:'.implode(',', Permission::getModels())
        ],
        'create' => [
            'required','boolean'
        ],
        'update' => [
            'required' , 'boolean'
        ],
        'read' => [
            'required','boolean'
        ],
        'delete' => [
            'required','boolean'
        ]
    ];
}

public function search(Request $request){
    $searchData='%'.$request->search.'%';
    return response()->json([
        'permissions' => Permission::where('name','like', $searchData )
        ->orWhere('model','like', $searchData )
        ->latest('id')->paginate(10)
    ]);
}

public function trashSearch(Request $request){
    $searchData='%'.$request->search.'%';
    return response()->json([
        'permissions' => Permission::onlyTrashed()
        ->where('name','like',$searchData)
        ->orWhere('model','like',$searchData)
        ->latest('id')
        ->paginate(10)
    ]);
}

public function checkPermission(string $model,string $action){

    $admin=auth('admin_api')->user();

    if($admin==NULL){
        
        return response()->json([
            'message' => 'Unauthenticated'
        ],401);
    }

    return $this->checkRoleAndPermission($admin->id,$model,$action) ? response()->json([
        'message' => 'Authorized'
    ]) : response()->json([
        'message' => 'Unauthorized'
    ],403);
}

public function get(){
    return response()->json([
        'permissions' => (new Permission)->getAll()
    ]);
}

public function deleteMultiple(Request $request){
    $request->validate([
        'permissions' => ['required','string']
    ]);
    $permissions=explode(',', $request->permissions);
    Permission::whereIn('id',$permissions)->delete();
    return response()->json([
        'message' => 'Permissions are deleted'
    ]);
}

public function restoreMultiple(Request $request){
    $request->validate([
        'permissions' => ['required','string']
    ]);
    $permissions=explode(',', $request->permissions);
    Permission::withTrashed()->whereIn('id',$permissions)->restore();
    return response()->json([
        'message' => 'Permissions are restored'
    ]);
}
}
