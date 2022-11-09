<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{CurrencyRate,Currency};
use App\Rules\{CurrencyRateValidation,CurrencyExchangeValidation};
use App\Traits\AdminRolePermission;
class CurrencyRateController extends Controller
{
    use AdminRolePermission;

    public $model = 'CurrencyRate';

    public function __construct(){
        $this->authorized($this->model);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexPage($currencyRates,Currency $currency){
        return response()->json([
            'currency_rates' => $currencyRates ,
            'main_currency' => $currency
        ]);
    }

    public function index(Currency $currency)
    {
        //
        return $this->indexPage(
            CurrencyRate::selectCurrencies()
            ->where('main_currency_id',$currency->id)
            ->latest('id')
            ->paginate(10),$currency
        );
    }

    public function search(Request $request,Currency $currency){
        $searchData='%'.$request->search.'%';
        $searchResult=is_numeric($request->search) ?
            CurrencyRate::selectCurrencies()
            ->where('main_currency_id',$currency->id)
            ->where('rate','like',$searchData)
            ->latest('id')
            ->paginate(10) :
            CurrencyRate::selectCurrencies()
            ->where('main_currency_id',$currency->id)
            ->searchUsedCurrency($searchData)
            ->latest('id')
            ->paginate(10);
        return $this->indexPage(
            !empty($searchResult->items()) ?
            $searchResult :
            CurrencyRate::selectCurrencies()
            ->whereIn('id',CurrencyRate::getIdsBySearchCreate($currency->id,$request->search) )
            ->latest('id')
            ->paginate(10),
            $currency
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
    public function store(Request $request,Currency $currency)
    {
        //
        $request->validate($this->validateData($currency->id));
        CurrencyRate::create( [
            'main_currency_id' => $currency->id,
            'used_currency_id' => $request->used_currency_id,
            'rate' => $request->rate
        ] );
        return response()->json([
            'message' => 'Currency Rate Exchange Data is created successfully'
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
        $currencyRate=CurrencyRate::selectCurrencies()
            ->findOrFail($id);
        return $currencyRate->main_currency_id==$currencyRate->used_currency_id ? unauthorized() : response()->json([
            'currency_rate' => $currencyRate
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,CurrencyRate $currencyRate)
    {
        //
        $request->validate($this->validateData($currencyRate->mainCurrencyId,$currencyRate));
        $currencyRate->update([
            'rate' => $request->rate
        ]);
        return response()->json([
            'message' => 'Currency Rate Exchange Data is updated successfully'
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
    }

    private function validateData($mainCurrencyId,$currencyRate=NULL){
        return [
            'used_currency_id' => $currencyRate==NULL ? ['required','integer',new CurrencyRateValidation($mainCurrencyId)] : 
            ['nullable',new CurrencyExchangeValidation($currencyRate)] ,
            'rate' => requiredDouble()
        ];
    }
}
