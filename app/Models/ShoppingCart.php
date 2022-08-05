<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\{UserDataTrait,ItemDataTrait};
class ShoppingCart extends Model
{
    use HasFactory,UserDataTrait,ItemDataTrait;

    protected $fillable=[
        'user_id',
        'item_id',
        'item_variant_id',
        'qty'];

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
}
