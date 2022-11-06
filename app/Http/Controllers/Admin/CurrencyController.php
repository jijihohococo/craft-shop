<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\{Currency,CurrencyRate};
use App\Rules\CurrencyMainValidation;
use DB;
class CurrencyController extends CommonController
{

    public $model = 'Currency';

    public $content = 'currencies';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->indexPage(
            Currency::latest('id')->paginate(10)
        );
    }

    public function trash(){
        return $this->indexPage(
            Currency::onlyTrashed()
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
        if($request->main==TRUE){
            Currency::where('main',TRUE)->update([
                'main' => FALSE
            ]);
        }
        $currency=Currency::create($request->all());
        CurrencyRate::create([
            'main_currency_id' => $currency->id ,
            'used_currency_id' => $currency->id ,
            'rate' => 1
        ]);
        DB::commit();
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
    public function show(Currency $currency)
    {
        //
        return $this->showCurrency($currency);
    }

    public function showCurrency($currency){
        return response()->json([
            'currency' => $currency
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Currency $currency)
    {
        //
        return $this->showCurrency($currency);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Currency $currency)
    {
        //
        $request->validate($this->validateData($currency->id));
        DB::beginTransaction();
        if($request->main==TRUE){
            Currency::where('id','<>',$currency->id)
            ->where('main',TRUE)
            ->update([
                'main' => FALSE
            ]);
        }
        $currency->update($request->all());
        DB::commit();
        return response()->json([
            'message' => $request->name . ' Currency is updated successfully' 
        ]);
    }

    private function validateData($id=NULL){
        return [
            'name' => uniqueColumn($this->content,$id),
            'main' => ['boolean',new CurrencyMainValidation($id)]
        ];
    }

    public function search(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Currency::searchWithName($searchData)
            ->searchCreateAndUpdate($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function trashSearch(Request $request){
        $searchData='%'.$request->search.'%';
        return $this->indexPage(
            Currency::onlyTrashed()
            ->searchWithCreate($searchData)
            ->trashSearchWithName($searchData)
            ->searchDelete($searchData)
            ->latest('id')
            ->paginate(10)
        );
    }

    public function getCurrencies(int $currencyId){
        $currencyIds=CurrencyRate::select('used_currency_id')
            ->where('main_currency_id',$currencyId)->get()->pluck('used_currency_id');
        $currencyIds[]=$currencyId;
        return $this->indexPage(
            Currency::whereNotIn('id',$currencyIds  )->get()
        );
    }

    public function getAvailableCurrencies(){
        $mainCurrency=Currency::where('main',TRUE)->first();
        return $this->indexPage(
            $mainCurrency!==NULL ?
            CurrencyRate::select('used_currency_id')
            ->selectCurrencies()
            ->where('main_currency_id',$mainCurrency->id)
            ->latest('id')
            ->get() :
            []
        );
    }
}
