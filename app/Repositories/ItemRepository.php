<?php

namespace App\Repositories;

use App\Models\Item;
class ItemRepository implements ItemRepositoryInterface{

	public function search($categoryId,$searchData){
		return Item::selectItemDataWithImages()
            ->selectPrice()
            ->where('category_id',$categoryId)
            ->searchWithName( $searchData )
            ->searchWithCategory($searchData)
            ->searchWithSubcategory($searchData)
            ->searchWithBrand($searchData)
            ->searchWithColor($searchData)
            ->latest('id')
            ->paginate(10);
	}

}