<?php

Route::post('login','Admin\Auth\LoginController@login');

// Route::get('get_token','Admin\SecureController@getToken');

Route::group(['middleware' => [ 'admin_auth'] ], function () {

	Route::resource('shops','Admin\ShopController');

	Route::resource('categories','Admin\CategoryController');
	Route::get('category_search','Admin\CategoryController@search');
	Route::get('category_trash_search','Admin\CategoryController@trashSearch');
	Route::delete('category_restore/{id}','Admin\CategoryController@restore');
	Route::get('get_categories','Admin\CategoryController@get');
	Route::get('trash_categories','Admin\CategoryController@trash');
	Route::delete('delete_categories','Admin\CategoryController@deleteMultiple');
	Route::delete('restore_categories','Admin\CategoryController@restoreMultiple');



	Route::resource('subcategories','Admin\SubcategoryController');
	Route::get('subcategory_search','Admin\SubcategoryController@search');
	Route::get('subcategory_trash_search','Admin\SubcategoryController@trashSearch');
	Route::delete('subcategory_restore/{id}','Admin\SubcategoryController@restore');
	Route::get('get_subcategories/{categoryId}','Admin\SubcategoryController@get');
	Route::get('trash_subcategories','Admin\SubcategoryController@trash');
	Route::delete('delete_subcategories','Admin\SubcategoryController@deleteMultiple');
	Route::delete('restore_subcategories','Admin\SubcategoryController@restoreMultiple');


	
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
	Route::get('item_trash_search','Admin\ItemController@trashSearch');
	Route::delete('item_restore/{id}','Admin\ItemController@restore');
	Route::get('total_items','Admin\ItemController@getTotal');
	Route::get('trash_items','Admin\ItemController@trash');
	Route::delete('delete_items','Admin\ItemController@deleteMultiple');
	Route::delete('restore_items','Admin\ItemController@restoreMultiple');


	Route::get('item_variant_images/{id}','Admin\ItemVariantImageController@index');
	Route::post('upload_item_variant_images/{id}','Admin\ItemVariantImageController@upload');
	Route::delete('delete_item_images/{id}','Admin\ItemVariantImageController@deleteItemImages');
	Route::post('item_image_delete/{id}','Admin\ItemVariantImageController@imageDelete');


	Route::get('item_variants/{id}','Admin\ItemVariantController@find');

	Route::resource('admins','Admin\AdminController');
	Route::get('admin','Admin\AdminController@get');
	Route::get('admin_search','Admin\AdminController@search');
	Route::get('admin_trash_search','Admin\AdminController@trashSearch');
	Route::delete('admin_restore/{id}','Admin\AdminController@restore');
	Route::get('trash_admins','Admin\AdminController@trash');
	Route::delete('delete_admins','Admin\AdminController@deleteMultiple');
	Route::delete('restore_admins','Admin\AdminController@restoreMultiple');

	Route::get('users','Admin\UserController@index');
	Route::get('total_users','Admin\UserController@getTotal');
	Route::get('user_search','Admin\UserController@search');

	Route::resource('targets','Admin\TargetController');
	Route::get('target_search','Admin\TargetController@search');
	Route::get('target_trash_search','Admin\TargetController@trashSearch');
	Route::delete('target_restore/{id}','Admin\TargetController@restore');
	Route::get('trash_targets','Admin\TargetController@trash');
	Route::delete('delete_targets','Admin\TargetController@deleteMultiple');
	Route::delete('restore_targets','Admin\TargetController@restoreMultiple');


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
	Route::get('role_trash_search','Admin\RoleController@trashSearch');
	Route::delete('role_restore/{id}','Admin\RoleController@restore');
	Route::get('get_roles','Admin\RoleController@get');
	Route::get('trash_roles','Admin\RoleController@trash');
	Route::delete('delete_roles','Admin\RoleController@deleteMultiple');
	Route::delete('restore_roles','Admin\RoleController@restoreMultiple');

	Route::resource('permissions','Admin\PermissionController');
	Route::get('permission_search','Admin\PermissionController@search');
	Route::get('permission_trash_search','Admin\PermissionController@trashSearch');
	Route::delete('permission_restore/{id}','Admin\PermissionController@restore');
	Route::get('check_permission/{model}/{action}','Admin\PermissionController@checkPermission');
	Route::get('get_permissions','Admin\PermissionController@get');
	Route::get('trash_permissions','Admin\PermissionController@trash');
	Route::delete('delete_permissions','Admin\PermissionController@deleteMultiple');
	Route::delete('restore_permissions','Admin\PermissionController@restoreMultiple');



	Route::get('transactions/{model}/{model_id}','Admin\TransactionController@get');
	Route::get('transaction_search/{model}/{model_id}','Admin\TransactionController@search');


	Route::resource('taxes','Admin\TaxController');
	Route::get('tax_search','Admin\TaxController@search');
	Route::get('tax_trash_search','Admin\TaxController@trashSearch');
	Route::delete('tax_restore/{id}','Admin\TaxController@restore');
	Route::get('get_taxes','Admin\TaxController@get');
	Route::get('trash_taxes','Admin\TaxController@trash');
	Route::delete('delete_taxes','Admin\TaxController@deleteMultiple');
	Route::delete('restore_taxes','Admin\TaxController@restoreMultiple');


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
	Route::get('color_trash_search','Admin\ColorController@trashSearch');
	Route::delete('color_restore/{id}','Admin\ColorController@restore');
	Route::get('get_colors','Admin\ColorController@get');
	Route::get('trash_colors','Admin\ColorController@trash');
	Route::delete('delete_colors','Admin\ColorController@deleteMultiple');
	Route::delete('restore_colors','Admin\ColorController@restoreMultiple');


	Route::get('orders','Admin\OrderController@index');

	Route::post('logout','Admin\Auth\LoginController@logOut');

});