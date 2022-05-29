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
Route::get('banners','User\BannerController@get');

Route::group(['middleware' => [ 'user_auth'] ], function () {
Route::get('item_wish_lists','User\WishlistController@get');
});