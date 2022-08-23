<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('items','User\ItemController@get');
Route::get('items/{id}','User\ItemController@show');


Route::get('wish_list','User\WishlistController@get');
Route::get('get_wish_number','User\WishlistController@getCount');
Route::post('add_item_to_wish_list/{itemId}','User\WishlistController@addItem');
Route::post('remove_item_from_wish_list','User\WishlistController@removeItem')->middleware('wishListDelete');

Route::get('shopping_cart','User\ShoppingCartController@get');
Route::post('add_item_to_shopping_cart/{itemVariantId}','User\ShoppingCartController@addSimpleItem');
Route::post('add_item_to_shopping_cart_detail/{itemVariantId}','User\ShoppingCartController@addDetailItem');
Route::post('remove_item_from_shopping_cart','User\ShoppingCartController@removeItem')->middleware('shoppingCartDelete');

Route::get('categories','CategoryController@get');
Route::get('brands','BrandController@get');
Route::get('banners','BannerController@get');
Route::get('colors','ColorController@get');
Route::get('currencies','CurrencyController@get');

Route::get('best_sellers','User\ItemController@showBestSeller');
Route::get('gamings','User\ItemController@showGaming');
Route::get('feature_products','User\ItemController@showFeatureProducts');

//------------------------------SHOP-----------------------------//
//----items----//
Route::get('get_items_by_categories/{categoryId}','User\Shop\ItemController@getItemsByCategory');
Route::get('get_items_by_subcategories/{subcategoryId}','User\Shop\ItemController@getItemsBySubcategory');
Route::get('get_items_by_brands/{brandId}','User\Shop\ItemController@getItemsByBrand');

Route::get('shop/{content}/{contentId?}','User\Shop\ItemController@shop');
//----items----//

//----attributes----//
Route::get('get_attributes_by_categories/{categoryId}','User\Shop\AttributeController@getAttributesByCategory');
Route::get('get_attributes_by_subcategories/{subcategoryId}','User\Shop\AttributeController@getAttributesBySubcategory');
Route::get('get_attributes_by_brands/{brandId}','User\Shop\AttributeController@getAttributesByBrand');
Route::get('search_attributes_by_categories/{categoryId}','User\Shop\AttributeController@getAttributesByCategorySearch');
Route::get('search_attributes_by_subcategories/{subcategoryId}','User\Shop\AttributeController@getAttributesBySubcategorySearch');
Route::get('search_attributes_by_brands/{brandId}','User\Shop\AttributeController@getAttributesByBrandSearch');
//----attributes----//

//----brands----//
Route::get('get_brands_by_categories/{categoryId}','User\Shop\BrandController@getBrandsByCategory');
Route::get('get_brands_by_subcategories/{subcategoryId}','User\Shop\BrandController@getBrandsBySubcategory');
Route::get('search_brands_by_categories/{categoryId}','User\Shop\BrandController@getBrandsByCategorySearch');
Route::get('search_brands_by_subcategories/{subcategoryId}','User\Shop\BrandController@getBrandsBySubcategorySearch');
//----brands----//

//----colors----//
Route::get('get_colors_by_categories/{categoryId}','User\Shop\ColorController@getColorsByCategory');
Route::get('get_colors_by_subcategories/{subcategoryId}','User\Shop\ColorController@getColorsBySubcategory');
Route::get('get_colors_by_brands/{brandId}','User\Shop\ColorController@getColorsByBrand');
Route::get('search_colors_by_categories/{categoryId}','User\Shop\ColorController@getColorsByCategorySearch');
Route::get('search_colors_by_subcategories/{subcategoryId}','User\Shop\ColorController@getColorsBySubcategorySearch');
//----colors----//

//------------------------------SHOP-----------------------------//

Route::group(['middleware' => [ 'user_auth'] ], function () {

Route::get('orders','User\OrderController@get');
Route::post('logout','User\Auth\LoginController@logOut');

});