<?php

namespace App\Repositories;

use App\Models\Item;
class ItemRepository implements ItemRepositoryInterface{

	public function searchByContent($content,$id,$searchData){
		return Item::selectItemDataWithImages()
            ->selectPrice()
            ->where($content.'_id',$id)
            ->searchData($searchData)
            ->latest('id')
            ->paginate(10);
	}


    public function getByContent($content,$id){
        return Item::selectItemDataWithImages()
            ->selectPrice()
            ->where($content.'_id',$id)
            ->latest('id')
            ->paginate(10);
    }

}