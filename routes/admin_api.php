<?php

Route::post('login','Admin\Auth\LoginController@login');

Route::group(['middleware' => [ 'admin_auth'] ], function () {
	Route::get('subscribes','Admin\SubscribeController@index');

	//--------------SHOP----------------//
	Route::resource('shops','Admin\ShopController');
	//--------------SHOP----------------//

	//--------------SEO----------------//
	Route::get('seos/{model}/{modelId}','Admin\SeoController@edit');
	Route::put('seos/{model}/{modelId}','Admin\SeoController@update');
	//--------------SEO----------------//	

	//--------------FAQ----------------//
	Route::get('faqs','Admin\FaqController@index');
	Route::get('faqs/edit','Admin\FaqController@edit');
	Route::put('faqs','Admin\FaqController@update');
	//--------------FAQ----------------//

	//--------------BLOG----------------//
	adminResourceApi('blog','blogs','BlogController');
	//--------------BLOG----------------//

	//--------------PAGE----------------//
	adminResourceApi('page','pages','PageController');
	//--------------PAGE----------------//

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
	Route::get('get_items','ItemController@get');
	//--------------ITEM----------------//


	//--------------COLLECTION----------------//
	adminResourceApi('collection','collections','CollectionController');
	//--------------COLLECTION----------------//

	//--------------ITEM VARIANT----------------//
	Route::get('item_variants/{id}','Admin\ItemVariantController@find');
	//--------------ITEM VARIANT----------------//

	//--------------ITEM STOCK----------------//
	adminItemVariantResourceApi('stocks','ItemStockController');
	Route::get('create_item_variant_stocks/{itemVariantId}','Admin\ItemStockController@create');
	//--------------ITEM STOCK----------------//

	//--------------ITEM PRICE----------------//
	adminItemVariantResourceApi('prices','ItemPriceController');
	Route::get('create_item_variant_prices/{itemVariantId}','Admin\ItemPriceController@create');
	//--------------ITEM PRICE----------------//

	//--------------ITEM IMAGE----------------//
	Route::get('item_variant_images/{id}','Admin\ItemVariantImageController@index');
	Route::post('upload_item_variant_images/{id}','Admin\ItemVariantImageController@upload');
	Route::delete('delete_item_images/{id}','Admin\ItemVariantImageController@deleteItemImages');
	Route::post('item_image_delete/{id}','Admin\ItemVariantImageController@imageDelete');
	//--------------ITEM IMAGE----------------//

	//--------------ADMIN----------------//
	adminResourceApi('admin','admins','AdminController');
	Route::get('admin','Admin\AdminController@get');
	//--------------ADMIN----------------//


	//--------------CUSTOMER SERVICE----------------//
	adminResourceApi('customer_service','customer_services','CustomerServiceController');
	//--------------CUSTOMER SERVICE----------------//


	//--------------USER----------------//
	Route::get('users','Admin\UserController@index');
	Route::get('total_users','Admin\UserController@getTotal');
	Route::get('user_search','Admin\UserController@search');
	//--------------USER----------------//

	//--------------TARGET----------------//
	adminResourceApi('target','targets','TargetController');
	//--------------TARGET----------------//


	//--------------PROMOTION----------------//
	adminResourceApi('promotion','promotions','PromotionController');
	Route::get('get_promotions','Admin\PromotionController@get');
	//--------------PROMOTION----------------//

	//--------------CURRENCY----------------//
	adminResourceApi('currency','currencies','CurrencyController');
	Route::get('get_currencies','CurrencyController@get');
	Route::get('get_available_currencies','Admin\CurrencyController@getAvailableCurrencies');
	Route::get('get_used_currencies/{currencyId}','Admin\CurrencyController@getCurrencies');
	//--------------CURRENCY----------------//

		//--------------CURRENCY RATE----------------//
	Route::get('currency_rates/{currency}','Admin\CurrencyRateController@index');
	Route::get('search_currency_rates/{currency}','Admin\CurrencyRateController@search');
	Route::post('save_currency_rates/{currency}','Admin\CurrencyRateController@store');
	Route::get('currency_rates/{id}/edit','Admin\CurrencyRateController@edit');
	Route::post('update_currency_rates/{currencyRate}','Admin\CurrencyRateController@update');
	//--------------CURRENCY RATE----------------//

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
	Route::get('attribute_trash_search','Admin\AttributeController@trashSearch');
	Route::delete('delete_data_attributes','Admin\AttributeController@deleteMultiple');
	Route::delete('restore_data_attributes','Admin\AttributeController@restoreMultiple');
	//--------------ATTRIBTE----------------//

	//--------------COLOR----------------//
	adminResourceApi('color','colors','ColorController');
	Route::get('get_colors','ColorController@get');
	//--------------COLOR----------------//

	//--------------COUNTRY----------------//
	adminResourceApi('country','countries','CountryController');
	Route::get('get_countries','CountryController@get');
	//--------------COUNTRY----------------//


	//--------------STATE----------------//
	adminResourceApi('state','states','StateController');
	Route::get('get_states/{countryId}','StateController@get');
	//--------------STATE----------------//

	//--------------CITY----------------//
	adminResourceApi('city','cities','CityController');
	//--------------CITY----------------//	

	//--------------SOCIAL MEDIA----------------//
	adminResourceApi('social_media','social_medias','SocialMediaController');
	Route::get('get_social_medias','SocialMediaController@get');
	//--------------SOCIAL MEDIA----------------//

	//--------------ORDER----------------//
	Route::get('orders','Admin\OrderController@index');
	Route::get('today_total_orders','Admin\OrderController@getTodayTotal');
	//--------------ORDER----------------//


	//--------------NOTIFICATION----------------//
	Route::get('notifications','Admin\NotificationController@index');
	Route::get('get_short_notifications','Admin\NotificationController@showShortList');
	//--------------NOTIFICATION----------------//


	Route::get('item_reviews/{itemId}','Admin\ItemReviewController@index');

	Route::post('logout','Admin\Auth\LoginController@logOut');

});