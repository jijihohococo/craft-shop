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
Route::get('shopping_cart','User\ShoppingCartController@get');

Route::post('add_item_to_wish_list','User\WishlistController@addItem');
Route::post('remove_item_to_wish_list','User\WishlistController@removeItem');


Route::post('add_item_to_shopping_cart','User\ShoppingCartController@addItem');
Route::post('remove_item_to_shopping_cart','User\ShoppingCartController@removeItem');

Route::get('get_categories','User\CategoryController@get');
Route::get('get_brands','User\BrandController@get');
Route::get('get_banners','User\BannerController@get');
Route::get('get_colors','User\ColorController@get');

Route::group(['middleware' => [ 'user_auth'] ], function () {

Route::get('orders','User\OrderController@get');
Route::post('logout','User\Auth\LoginController@logOut');

});