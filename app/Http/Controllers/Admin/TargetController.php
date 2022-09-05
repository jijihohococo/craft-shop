<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Target;
class TargetController extends CommonController
{

    public $model = 'Target';

    public $contents='targets';
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
}
