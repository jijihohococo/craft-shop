<?php

namespace App\Traits;
use View;
use App\Models\Shop;
trait ShopData{


	public function getShop(){
		View::share([
            'shop' => Shop::findOrFail(1)
        ]);
	}

}