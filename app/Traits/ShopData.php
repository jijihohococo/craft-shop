<?php

namespace App\Traits;
use View;
use App\Models\Shop;
trait ShopData{


	public function getShop(){
		View::share([
            'shop' => Shop::selectSeo()->findOrFail(1)
        ]);
	}

}