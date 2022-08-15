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

Route::get('get_items_by_categories/{categoryId}','User\ItemController@showByCategory');
Route::get('get_items_by_subcategories/{subcategoryId}','User\ItemController@showBySubcategory');
Route::get('get_items_by_brands/{brandId}','User\ItemController@showByBrand');

Route::group(['middleware' => [ 'user_auth'] ], function () {

Route::get('orders','User\OrderController@get');
Route::post('logout','User\Auth\LoginController@logOut');

});