<?php

namespace App\Repositories;

use Illuminate\Support\ServiceProvider;

class BackendServiceProvider extends ServiceProvider{

	public function register()
	{
		$this->app->bind(
			'App\Repositories\SeoRepositoryInterface',
			'App\Repositories\SeoRepository'
		);

		$this->app->bind(
			'App\Repositories\ShoppingCartRepositoryInterface',
			'App\Repositories\ShoppingCartRepository'
		);

		$this->app->bind(
			'App\Repositories\ItemRepositoryInterface',
			'App\Repositories\ItemRepository'
		);

		$this->app->bind(
			'App\Repositories\AttributeRepositoryInterface',
			'App\Repositories\AttributeRepository'
		);

		$this->app->bind(
			'App\Repositories\ColorRepositoryInterface',
			'App\Repositories\ColorRepository'
		);

		$this->app->bind(
			'App\Repositories\BrandRepositoryInterface',
			'App\Repositories\BrandRepository'
		);

		$this->app->bind(
			'App\Repositories\OrderRepositoryInterface',
			'App\Repositories\OrderRepository'
		);

		$this->app->bind(
			'App\Repositories\WishListRepositoryInterface',
			'App\Repositories\WishListRepository'
		);

	}


}