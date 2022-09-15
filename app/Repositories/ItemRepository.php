<?php

namespace App\Repositories;

use App\Models\Item;
class ItemRepository implements ItemRepositoryInterface{

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

}