<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\{Permission,TokenRefresh,Admin};
use App\Traits\RolePermission;

class PermissionController extends CommonController
{

    use RolePermission;
    
    public $model = 'Permission';

    public $content = 'permissions';

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
        'permissions' => Permission::searchWithName($searchData)
        ->orWhere('model','like', $searchData )
        ->searchCreateAndUpdate($searchData)
        ->latest('id')->paginate(10)
    ]);
}

public function trashSearch(Request $request){
    $searchData='%'.$request->search.'%';
    return response()->json([
        'permissions' => Permission::onlyTrashed()
        ->searchWithName($searchData)
        ->orWhere('model','like',$searchData)
        ->searchDelete($searchData)
        ->latest('id')
        ->paginate(10)
    ]);
}

public function checkPermission(string $model,string $action){

    $admin=auth('admin_api')->user();

    if($admin==NULL){
        return unauthenticated();
    }

    return $this->checkRoleAndPermission($admin->id,$model,$action) ? response()->json([
        'message' => 'Authorized'
    ]) : unauthorized();
}

public function get(){
    return response()->json([
        'permissions' => (new Permission)->getAll()
    ]);
}
}
