<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//----------------ADMIN FRONTEND ROUTES----------------//
Route::view('/admin/{any}','admin.index')->where('any','.*')->middleware('checkAdminCookie');
//----------------ADMIN FRONTEND ROUTES----------------//



//----------------USER FRONTEND ROUTES----------------//
$userRoutes=[
	null,
	'privacy_policy',
	'contact_us',
	'about_us',
	'faq',
	'return_policy',
	'terms_and_conditions',
	'shopping_cart',
	'wish_list',
	'items/{id}',
	'orders',
	'orders/{id}',
	'promotions/{id}',
	'shop/{content}/{contentId}'];
	foreach($userRoutes as $userRoute){
		Route::view('/'.$userRoute,'user.index');
	}
//----------------USER FRONTEND ROUTES----------------//


	//----------------LOGIN & REGISTER----------------//
	Route::group(['middleware' => [ 'checkUserCookie'] ], function () {
		Route::get('/redirect/{social}',
			'User\Auth\SocialLoginController@redirect');
		Route::get('/callback',
			'User\Auth\SocialLoginController@fbCallBack');
		Route::get('/googleCallBack',
			'User\Auth\SocialLoginController@googleCallBack');
		Route::view('/register','user.index');
		Route::view('/login','user.index');
		Route::view('/forgot_password','user.index');
	});
	//----------------SOCIAL LOGIN----------------//

	//----------------ALL IMAGE ROUTES----------------//
	Route::get('/image/{folder}/{imageUrl}',
		'ImageCacheController@cacheImage');
	//----------------ALL IMAGE ROUTES----------------//