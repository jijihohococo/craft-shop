<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Currency;
use App\Traits\AdminRolePermission;
class CurrencyController extends Controller
{
    use AdminRolePermission;

    public function __construct(){
        $this->authorized(Currency::$content);
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
            'currencies' => Currency::latest('id')->paginate(10)
        ]);
    }

    public function trash(){
        return response()->json([
            'currencies' => Currency::onlyTrashed()
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
        Currency::create($request->all());
        return response()->json([
            'message' => $request->name .' Currency is created successfully'
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
            'currency' => Currency::findOrFail($id)
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
        Currency::findOrFail($id)->update($request->all());
        return response()->json([
            'message' => $request->name . ' Currency is updated successfully' 
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
        $currency=Currency::withTrashed()->findOrFail($id);
        $currency->delete();
        return response()->json([
          'message' => $currency->name . ' Currency is deleted successfully',
          'deleted_at' => $currency->deleted_at
        ]);
    }

    public function restore($id){
       $currency=Currency::withTrashed()->findOrFail($id);
       $currency->restore();
       return response()->json([
          'message' => $currency->name . ' Currency is restored successfully',
          'deleted_at' => $currency->deleted_at
      ]);
   }

    private function validateData($id=NULL){
        return [
            'name' => ['required', 'string', 'max:100', $id==null ? 'unique:currencies' : 'unique:currencies,name,'.$id ],
            'price' => 'required|numeric|between:0.000,999999999.9999'
        ];
    }

    public function search(Request $request){
        $search='%'.$request->search.'%';
        return response()->json([
            'currencies' => Currency::where('name','like',$search)
            ->orWhere('price','like',$search)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function trashSearch(Request $request){
        $search='%'.$request->search.'%';
        return response()->json([
            'currencies' => Currency::onlyTrashed()
            ->where('name','like',$search)
            ->orWhere('price','like',$search)
            ->latest('id')
            ->paginate(10)
        ]);
    }

    public function get(){
        return response()->json([
            'currencies' => (new Currency)->getAll()
        ]);
    }

    public function deleteMultiple(Request $request){
        $request->validate([
            'currencies' => ['required','string']
        ]);
        $currencies=explode(',', $request->currencies);
        Currency::whereIn('id',$currencies)->delete();
        return response()->json([
            'message' => 'Currencies are deleted'
        ]);
    }

    public function restoreMultiple(Request $request){
        $request->validate([
            'currencies' => ['required','string']
        ]);
        $currencies=explode(',', $request->currencies);
        Currency::withTrashed()->whereIn('id',$currencies)->restore();
        return response()->json([
            'message' => 'Currencies are restored'
        ]);
    }
}
