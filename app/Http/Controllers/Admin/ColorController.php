<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Color;
use App\Traits\AdminRolePermission;
class ColorController extends Controller
{
    use AdminRolePermission;

    public function __construct(){
        $this->authorized('Color');
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
            'colors' => Color::latest('id')->paginate(10)
        ]);
    }

    public function trash(){
        return response()->json([
            'colors' => Color::onlyTrashed()
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
        Color::create($request->all());
        return response()->json([
            'message' => $request->name . ' Color is created successfully'
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
            'color' => Color::findOrFail($id)
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
        Color::findOrFail($id)->update($request->all());
        return response()->json([
            'message' => $request->name . ' Color is updated successfully'
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
        $color=Color::withTrashed()->findOrFail($id);
        $color->delete();
        return response()->json([
          'message' => $color->name . ' Color is deleted successfully',
          'deleted_at' => $color->deleted_at
      ]);
    }

    public function restore($id)
    {
        //
        $color=Color::withTrashed()->findOrFail($id);
        $color->restore();
        return response()->json([
          'message' => $color->name . ' Color is restored successfully',
          'deleted_at' => $color->deleted_at
      ]);
    }

    private function validateData($id=NULL){
        return [
            'name' => ['required', 'string', 'max:100', $id==null ? 'unique:colors' : 'unique:colors,name,'.$id ] ,
        ];
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'colors' => Color::searchWithName($searchData)
            ->orWhere('color_code','like',$searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return response()->json([
            'colors' => Color::onlyTrashed()
            ->searchWithName($searchData)
            ->orWhere('color_code','like',$searchData)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function get(){
        return response()->json([
            'colors' => (new Color)->getAll()
        ]);
    }

    public function deleteMultiple(Request $request){
        $request->validate([
            'colors' => ['required','string']
        ]);
        $colors=explode(',', $request->colors);
        Color::whereIn('id',$colors)->delete();
        return response()->json([
            'message' => 'Colors are deleted'
        ]);
    }

    public function restoreMultiple(Request $request){
        $request->validate([
            'colors' => ['required','string']
        ]);
        $colors=explode(',', $request->colors);
        Color::withTrashed()->whereIn('id',$colors)->restore();
        return response()->json([
            'message' => 'Colors are restored'
        ]);
    }
}
