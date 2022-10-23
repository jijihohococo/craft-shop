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
Route::get('countries','CountryController@get');
Route::get('collections','CollectionController@get');

Route::get('best_sellers','User\ItemController@showBestSeller');
Route::get('gamings','User\ItemController@showGaming');
Route::get('feature_products','User\ItemController@showFeatureProducts');

//------------------------------SHOP-----------------------------//
//----items----//
Route::get('shop/{content}/{contentId?}','User\Shop\ItemController@shop');
//----items----//

//----attributes----//
Route::get('get_attributes_by_content/{content}/{contentId?}','User\Shop\AttributeController@getDataByContent');
//----attributes----//

//----brands----//
Route::get('get_brands_by_content/{content}/{contentId?}','User\Shop\BrandController@getDataByContent');
//----brands----//

//----colors----//
Route::get('get_colors_by_content/{content}/{contentId?}','User\Shop\ColorController@getDataByContent');
//----colors----//

//------------------------------SHOP-----------------------------//



Route::post('user_register','User\Auth\RegisterController@register');
Route::post('login','User\Auth\LoginController@login');

Route::group(['middleware' => [ 'user_auth'] ], function () {

Route::get('orders','User\OrderController@get');
Route::get('orders/{order}','User\OrderController@show');
Route::post('logout','User\Auth\LoginController@logOut');

});