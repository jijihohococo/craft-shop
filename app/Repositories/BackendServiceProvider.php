<?php

namespace App\Repositories;

use Illuminate\Support\ServiceProvider;

class BackendServiceProvider extends ServiceProvider{

	public function register()
	{
		$this->app->bind(
			'App\Repositories\ShoppingCartRepositoryInterface',
			'App\Repositories\ShoppingCartRepository'
		);

		$this->app->bind(
			'App\Repositories\ItemRepositoryInterface',
			'App\Repositories\ItemRepository'
		);

		$this->app->bind(
			'App\Repositories\OrderRepositoryInterface',
			'App\Repositories\OrderRepository'
		);

	}


}