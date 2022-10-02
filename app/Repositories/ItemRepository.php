<?php

namespace App\Repositories;

use App\Models\{Item,ItemPrice};
class ItemRepository implements ItemRepositoryInterface{

    private $maxPrice;

	public function searchByContent($content,$id,$searchData){
        return $this->getByContent($content,$id)
        ->searchData($searchData);
	}


    public function getByContent($content,$id){
        return $this->getAll()
            ->where($content.'_id',$id);
    }

    public function getAll(){
        return Item::selectShopItem()
        ->available();
    }

    public function getItemPrice($itemIds){
        return ItemPrice::whereIn('item_variant_id', function($query) use ($itemIds){
            $query->select('id')
            ->from('item_variants')
            ->whereIn('item_id',$itemIds);
        } );
    }

    public function getMaxPrice($itemIds){
        $this->maxPrice=$this->getItemPrice($itemIds)
        ->max(
            \DB::raw(ItemPrice::PRICE_SQL)
        );
        return $this->maxPrice;
    }

    public function getMinPrice($itemIds){

        $minPrice=$this->getItemPrice($itemIds)
        ->min(
            \DB::raw(ItemPrice::PRICE_SQL)
        );
        return $minPrice==$this->maxPrice ? "0" : $minPrice;
    }

}