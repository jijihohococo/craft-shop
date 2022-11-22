<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\{Admin,AdminRole,UserData};
use DB;
class AdminController extends CommonController
{

    private $roles=[];

    public $model = 'Admin';

    public $content = 'admins';

    // public function __construct(){
    //     parent::__construct();
    //     $this->middleware('checkAdmin')->only(['edit','update']);
    // }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(Admin::latest('id')->paginate(10));
    }

    public function trash(){
        return $this->indexPage(Admin::onlyTrashed()
            ->latest('id')
            ->paginate(10));
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
        makePassword($request);
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
            'admin' => Admin::findOrFail($id) ,
            'roles' => DB::table('roles')
            ->select('id')->whereIn('id',function($query) use ($id){
                $query->select('role_id')
                ->from('admin_roles')
                ->where('admin_roles.admin_id',$id);
            })->where('roles.deleted_at',null)
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
    public function update(Request $request,Admin $admin)
    {
        //
        $loginAdminId=UserData::getId();
        $request->validate($this->validateData($admin->id));
        if($admin->id==$loginAdminId){
            makePassword($request);
        }
        DB::beginTransaction();
        $admin->update( $admin->id==$loginAdminId ? 
            $request->all() : $request->except(['password']) );
        $this->roles=$admin->roles->pluck('role_id')->toArray();
        $this->insertAdminRoles($request->roles,$admin->id,'yes');
        DB::commit();
        return response()->json([
            'message' => $request->name . ' Admin is updated successfully' 
        ]);
    }

    private function validateData($id=NULL){
        return [
            'name' => 'required|string|max:100',
            'email' => ['required', 'email' , 'max:100', $id==null ? 'unique:admins' : 'unique:admins,email,'.$id ] ,
            'roles' => ['required','array'] ,
            'password' => ['nullable', 'string', 'min:8', 'confirmed']
        ];
    }

    public function get(){
        $admin=auth(Admin::API)->user();
        return $admin!==NULL ? response()->json([
            'admin' => $admin
        ]) : unauthenticated() ;
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(Admin::searchWithName($searchData)
            ->searchWithEmail($searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10));
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Admin::onlyTrashed()
            ->searchWithCreate($searchData)
            ->trashSearchWithName($searchData)
            ->searchWithEmail($searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10) );
    }
}
