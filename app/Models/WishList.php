<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\{UserDataTrait,ItemDataTrait};
class WishList extends Model
{
    use HasFactory,UserDataTrait,ItemDataTrait;

    protected $fillable=[
        'user_id',
        'item_id'];

        public static function selectPrice($priceSQL,$query){
            return function($query) use($priceSQL) {
                $query->select(
                    \DB::raw(
                        $priceSQL
                    )
                )->from('item_prices')
                ->where('item_prices.item_variant_id',function($query) {
                    $query->select('id')
                    ->from('item_variants')
                    ->where('item_variants.item_id',function($query){
                        $query->select('id')
                        ->from('items')
                        ->whereColumn('items.id','wish_lists.item_id')
                        ->orderBy('items.id','DESC')
                        ->limit(1);
                    })
                    ->limit(1);
                })
                ->orderBy('item_prices.id','DESC')
                ->limit(1);
            };
        }

        public function scopeSelectItemPrice($query){
            return $query->addSelect([
            'sale_price' => self::selectPrice(ItemPrice::SALE_PRICE_SQL,$query)  ,
            'normal_price' => self::selectPrice(ItemPrice::PRICE_SQL,$query)  ]);

        }
    }
