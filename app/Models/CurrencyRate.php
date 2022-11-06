<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Events\{CreatedTransaction,UpdatedTransaction,DeletedTransaction,RestoredTransaction};
use App\Traits\CreateAndUpdateSearch;
class CurrencyRate extends Model
{

    use HasFactory,CreateAndUpdateSearch;

    protected $dispatchesEvents=[
        'created' => CreatedTransaction::class,
        'updated' => UpdatedTransaction::class,
        'deleted' => DeletedTransaction::class,
        'restored' => RestoredTransaction::class
    ];

    protected $fillable=[
        'main_currency_id',
        'used_currency_id',
        'rate'
    ];

    public function scopeSelectCurrencies($query){
        return $query->addSelect([
            'main_currency' => function($query) {
                $query->select('name')
                ->from('currencies')
                ->whereColumn('main_currency_id','currencies.id')
                ->limit(1);
            },
            'used_currency' => function($query){
                $query->select('name')
                ->from('currencies')
                ->whereColumn('used_currency_id','currencies.id')
                ->limit(1);
            }
        ]);
    }

    public function scopeSearchUsedCurrency($query,$searchData){
        return $query->whereIn('used_currency_id',
            Currency::select('id')
            ->searchWithName($searchData)
            ->getQuery() );
    }

    public static function getIdsBySearchCreate($currencyId,$searchData){
        $currencyRates=self::where('main_currency_id',$currencyId)
        ->get();
        $ids=[];
        foreach ($currencyRates as $currencyRate) {
            if(strpos($currencyRate->created_at, $searchData) !== false){
                $ids[]=$currencyRate->id;
            }
        }
        return $ids;
    }

}
