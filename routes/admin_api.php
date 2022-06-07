<?php

Route::post('login','Admin\Auth\LoginController@login');

// Route::get('get_token','Admin\SecureController@getToken');

Route::group(['middleware' => [ 'admin_auth'] ], function () {

	Route::resource('categories','Admin\CategoryController');
	Route::get('category_search','Admin\CategoryController@search');
	Route::get('category_trash_search','Admin\CategoryController@trashSearch');
	Route::delete('category_restore/{id}','Admin\CategoryController@restore');
	Route::get('get_categories','Admin\CategoryController@get');
	Route::get('trash_categories','Admin\CategoryController@trash');
	Route::delete('delete_categories','Admin\CategoryController@deleteMultiple');
	Route::delete('restore_categories','Admin\CategoryController@restoreMultiple');
	
	Route::resource('banners','Admin\BannerController');
	Route::get('banner_search','Admin\BannerController@search');
	Route::get('banner_trash_search','Admin\BrandController@trashSearch');
	Route::delete('banner_restore/{id}','Admin\BannerController@restore');
	Route::get('get_banners','Admin\BannerController@get');
	Route::get('trash_banners','Admin\BannerController@trash');
	Route::delete('delete_banners','Admin\BannerController@deleteMultiple');
	Route::delete('restore_banners','Admin\BannerController@restoreMultiple');

	Route::resource('brands','Admin\BrandController');
	Route::get('brand_search','Admin\BrandController@search');
	Route::get('brand_trash_search','Admin\BrandController@trashSearch');
	Route::delete('brand_restore/{id}','Admin\BrandController@restore');
	Route::get('get_brands','Admin\BrandController@get');
	Route::get('trash_brands','Admin\BrandController@trash');
	Route::delete('delete_brands','Admin\BrandController@deleteMultiple');
	Route::delete('restore_brands','Admin\BrandController@restoreMultiple');

	Route::resource('items','Admin\ItemController');
	Route::get('item_search','Admin\ItemController@search');
	Route::delete('item_restore/{id}','Admin\ItemController@restore');
	Route::delete('delete_item_images/{id}','Admin\ItemController@deleteItemImages');
	Route::post('item_image_delete/{id}','Admin\ItemController@imageDelete');
	Route::get('total_items','Admin\ItemController@getTotal');

	Route::resource('admins','Admin\AdminController');
	Route::get('admin','Admin\AdminController@get');
	Route::get('admin_search','Admin\AdminController@search');
	Route::delete('admin_restore/{id}','Admin\AdminController@restore');

	Route::get('users','Admin\UserController@index');
	Route::get('total_users','Admin\UserController@getTotal');
	Route::get('user_search','Admin\UserController@search');

	Route::resource('targets','Admin\TargetController');
	Route::get('target_search','Admin\TargetController@search');
	Route::delete('target_restore/{id}','Admin\TargetController@restore');

	Route::resource('currencies','Admin\CurrencyController');
	Route::get('currency_search','Admin\CurrencyController@search');
	Route::get('category_trash_search','Admin\CategoryController@trashSearch');
	Route::delete('currency_restore/{id}','Admin\CurrencyController@restore');
	Route::get('get_currencies','Admin\CurrencyController@get');
	Route::get('trash_currencies','Admin\CurrencyController@trash');
	Route::delete('delete_currencies','Admin\CurrencyController@deleteMultiple');
	Route::delete('restore_currencies','Admin\CurrencyController@restoreMultiple');

	Route::resource('roles','Admin\RoleController');
	Route::get('role_search','Admin\RoleController@search');
	Route::delete('role_restore/{id}','Admin\RoleController@restore');
	Route::get('get_roles','Admin\RoleController@get');

	Route::resource('permissions','Admin\PermissionController');
	Route::get('permission_search','Admin\PermissionController@search');
	Route::delete('permission_restore/{id}','Admin\PermissionController@restore');
	Route::get('check_permission/{model}/{action}','Admin\PermissionController@checkPermission');
	Route::get('get_permissions','Admin\PermissionController@get');

	Route::get('transactions/{model}/{model_id}','Admin\TransactionController@get');
	Route::get('transaction_search/{model}/{model_id}','Admin\TransactionController@search');


	Route::resource('taxes','Admin\TaxController');
	Route::get('tax_search','Admin\TaxController@search');
	Route::delete('tax_restore/{id}','Admin\TaxController@restore');
	Route::get('get_taxes','Admin\TaxController@get');


	Route::resource('attributes','Admin\AttributeController');
	Route::get('attribute_search','Admin\AttributeController@search');
	Route::delete('attribute_restore/{id}','Admin\AttributeController@restore');
	Route::get('get_attributes','Admin\AttributeController@get');
	Route::get('get_attribute_sets/{attributeId}','Admin\AttributeController@getAtrributeSets');
	Route::get('get_item_attribute_sets/{itemAttributeId}','Admin\AttributeController@getItemAttributeSets');
	Route::get('trash_attributes','Admin\AttributeController@trash');
	Route::delete('delete_data_attributes','Admin\AttributeController@deleteMultiple');
	Route::delete('restore_data_attributes','Admin\AttributeController@restoreMultiple');


	Route::resource('colors','Admin\ColorController');
	Route::get('color_search','Admin\ColorController@search');
	Route::delete('color_restore/{id}','Admin\ColorController@restore');
	Route::get('get_colors','Admin\ColorController@get');


	Route::get('orders','Admin\OrderController@index');

	Route::post('logout','Admin\Auth\LoginController@logOut');

});