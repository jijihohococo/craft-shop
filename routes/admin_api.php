<?php

Route::post('login','Admin\Auth\LoginController@login');

// Route::get('get_token','Admin\SecureController@getToken');

Route::group(['middleware' => [ 'admin_auth'] ], function () {

	Route::resource('shops','Admin\ShopController');

	//--------------CATEGORY----------------//
	Route::get('get_categories','CategoryController@get');
	adminResourceApi('category','categories','CategoryController');
	//--------------CATEGORY----------------//

	//--------------SUBCATEGORY----------------//
	adminResourceApi('subcategory','subcategories','SubcategoryController');
	Route::get('get_subcategories/{categoryId}','Admin\SubcategoryController@get');
	Route::get('get_all_subcategories','Admin\SubcategoryController@getAll');
	//--------------SUBCATEGORY----------------//

	//--------------BANNER----------------//
	adminResourceApi('banner','banners','BannerController');
	Route::get('get_banners','BannerController@get');
	//--------------BANNER----------------//

	//--------------BRAND----------------//
	adminResourceApi('brand','brands','BrandController');
	Route::get('get_brands','BrandController@get');
	//--------------BRAND----------------//

	//--------------ITEM----------------//
	adminResourceApi('item','items','ItemController');
	Route::get('total_items','Admin\ItemController@getTotal');
	Route::get('get_items','User\ItemController@get');
	//--------------ITEM----------------//


	Route::get('item_variant_images/{id}','Admin\ItemVariantImageController@index');
	Route::post('upload_item_variant_images/{id}','Admin\ItemVariantImageController@upload');
	Route::delete('delete_item_images/{id}','Admin\ItemVariantImageController@deleteItemImages');
	Route::post('item_image_delete/{id}','Admin\ItemVariantImageController@imageDelete');


	Route::get('item_variants/{id}','Admin\ItemVariantController@find');

	//--------------ADMIN----------------//
	adminResourceApi('admin','admins','AdminController');
	Route::get('admin','Admin\AdminController@get');
	//--------------ADMIN----------------//



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

	//--------------CURRENCY----------------//
	adminResourceApi('currency','currencies','CurrencyController');
	Route::get('get_currencies','CurrencyController@get');
	//--------------CURRENCY----------------//

	//--------------ROLE----------------//
	adminResourceApi('role','roles','RoleController');
	Route::get('get_roles','Admin\RoleController@get');
	//--------------ROLE----------------//

	//--------------PERMISSION----------------//
	adminResourceApi('permission','permissions','PermissionController');
	Route::get('check_permission/{model}/{action}','Admin\PermissionController@checkPermission');
	Route::get('get_permissions','Admin\PermissionController@get');
	//--------------PERMISSION----------------//


	Route::get('transactions/{model}/{model_id}','Admin\TransactionController@get');
	Route::get('transaction_search/{model}/{model_id}','Admin\TransactionController@search');

	//--------------TAX----------------//
	adminResourceApi('tax','taxes','TaxController');
	Route::get('get_taxes','Admin\TaxController@get');
	//--------------TAX----------------//

	//--------------ATTRIBTE----------------//
	Route::resource('attributes','Admin\AttributeController');
	Route::get('attribute_search','Admin\AttributeController@search');
	Route::delete('attribute_restore/{id}','Admin\AttributeController@restore');
	Route::get('get_attributes','Admin\AttributeController@get');
	Route::get('get_attribute_sets/{attributeId}','Admin\AttributeController@getAtrributeSets');
	Route::get('get_item_attribute_sets/{itemAttributeId}','Admin\AttributeController@getItemAttributeSets');
	Route::get('trash_attributes','Admin\AttributeController@trash');
	Route::delete('delete_data_attributes','Admin\AttributeController@deleteMultiple');
	Route::delete('restore_data_attributes','Admin\AttributeController@restoreMultiple');
	//--------------ATTRIBTE----------------//

	//--------------COLOR----------------//
	adminResourceApi('color','colors','ColorController');
	Route::get('get_colors','ColorController@get');
	//--------------COLOR----------------//

	//--------------COUNTRY----------------//
	adminResourceApi('country','countries','CountryController');
	//--------------COUNTRY----------------//

	Route::get('orders','Admin\OrderController@index');

	Route::post('logout','Admin\Auth\LoginController@logOut');

});