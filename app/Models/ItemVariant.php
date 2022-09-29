<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\ItemDataTrait;
class ItemVariant extends Model
{
    use HasFactory,ItemDataTrait;

    public function item(){
        return $this->belongsTo('App\Models\Item')->withDefault()->withTrashed();
    }

    public function color(){
        return $this->belongsTo('App\Models\Color')->withDefault()->withTrashed();
    }

    public function images(){
        return $this->hasMany('App\Models\ItemImage');
    }

    public function scopeSelectColor($query){
        return $query->addSelect(['color_name' => function($query) {
            $query->select('name')
            ->from('colors')
            ->whereColumn('color_id','colors.id')
            ->limit(1);
        } ]); 
    }

    private function checkPromotion($itemPrice){
        return $itemPrice->promotion_start_time<=NOW() &&
        $itemPrice->promotion_end_time>=NOW();
    }

    private function getExchangePrice($itemPrice){
        return $itemPrice->price*$itemPrice->currency_price;
    }

    private function getItemPrice(){
        return ItemPrice::selectCurrency()
        ->where('item_variant_id',$this->id)
        ->orderBy('id','DESC')->limit(1)->first();
    }

    public function getNormalPriceAttribute(){
        $itemPrice=$this->getItemPrice();
        return $itemPrice!==NULL ? $this->getExchangePrice($itemPrice) : NULL;
    }

    public function getSalePriceAttribute(){
        $itemPrice=$this->getItemPrice();
        if($itemPrice!==NULL && 
            $this->checkPromotion($itemPrice) &&
            $itemPrice->promotion_type=='Price' ){
            return $this->getExchangePrice($itemPrice)-$itemPrice->promotion_price;
        }
        if($itemPrice!==NULL &&
            $this->checkPromotion($itemPrice) &&
            $itemPrice->promotion_type=='Percent'
        ){
            $price=$this->getExchangePrice($itemPrice);
            return $price -$price*($itemPrice->promotion_price/100);
        }
        return NULL;
    }
}
