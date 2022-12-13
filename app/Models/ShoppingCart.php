<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UserDataTrait;
use DB;
class ShoppingCart extends Model
{
    use HasFactory,UserDataTrait;

    public const TABLE_NAME='shopping_carts';

    protected $fillable=[
        'user_id',
        'item_variant_id',
        'qty'];

        public function scopeSelectItem($query){
            return $query->addSelect(['item_name' => function($query){
                $query->select('name')
                ->from('items')
                ->where('items.id',function($query){
                    $query->select('item_id')
                    ->from('item_variants')
                    ->whereColumn('item_variant_id','item_variants.id')
                    ->limit(1);
                })->limit(1);
            },
            'item_image' => function($query){
                $query->selectSub(function($query){
                    Item::selectImage($query);
                },'image')
                ->from('items')
                ->where('items.id',function($query){
                    $query->select('item_id')
                    ->from('item_variants')
                    ->whereColumn('item_variant_id','item_variants.id')
                    ->limit(1);
                })->limit(1);
            } ]);
        }

        public function scopeSelectItemColorCode($query){
            return $query->addSelect(['color_code' => function($query) {
                $query->selectSub(function($query){
                    $query->select('color_code')
                    ->from('colors')
                    ->whereColumn('item_variants.color_id','colors.id')
                    ->limit(1);
                },'color_code')
                ->from('item_variants')
                ->whereColumn('item_variant_id','item_variants.id')
                ->limit(1);
            } ]);
        }

        public function scopeSelectItemPrice($query){
            return $query->addSelect([
                'sale_price' => function($query){
                    $query->select(
                        \DB::raw(
                            ItemPrice::SALE_PRICE_SQL
                        )
                    )->from('item_prices')
                    ->whereColumn('item_prices.item_variant_id','shopping_carts.item_variant_id')
                    ->orderBy('item_prices.id','DESC')
                    ->limit(1);
                } ,
                'normal_price' => function($query){
                    $query->select(
                        \DB::raw(
                            ItemPrice::PRICE_SQL
                        )
                    )->from('item_prices')
                    ->whereColumn('item_prices.item_variant_id','shopping_carts.item_variant_id')
                    ->orderBy('item_prices.id','DESC')
                    ->limit(1);
                } ,
                // 'tax' => function($query){
                //     $query->selectSub(function($query){
                //         Tax::getTaxFromItemPrice($query);
                //     },'tax')->from('item_prices')
                //     ->whereColumn('item_prices.item_variant_id','shopping_carts.item_variant_id')
                //     ->orderBy('item_prices.id','DESC')
                //     ->limit(1);
                // }
            ]);
        }


        public function scopeSelectItemQty($query){
            return $query->addSelect([
                'item_available_stock' => function($query){
                    $query->select('available_stock')
                    ->from('item_stocks')
                    ->whereColumn('item_stocks.item_variant_id','shopping_carts.item_variant_id')
                    ->orderBy('item_stocks.id','DESC')
                    ->limit(1);
                }
            ]);
        }
    }
