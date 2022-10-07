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


$userPage='user.index';
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
	'promotions/{id}'];
	foreach($userRoutes as $userRoute){
		Route::view('/'.$userRoute,$userPage);
	}
	foreach(['category',
		'subcategory',
		'brand'] as $content){
		Route::view('/shop/'.$content.'/{contentId}',$userPage);
	}
//----------------USER FRONTEND ROUTES----------------//


	//----------------LOGIN & REGISTER----------------//
	Route::group(['middleware' => [ 'checkUserCookie'] ], function () use ($userPage)  {
		Route::get('/redirect/{social}',
			'User\Auth\SocialLoginController@redirect');
		Route::get('/callback',
			'User\Auth\SocialLoginController@fbCallBack');
		Route::get('/googleCallBack',
			'User\Auth\SocialLoginController@googleCallBack');
		Route::view('/register',$userPage);
		Route::view('/login',$userPage);
		Route::view('/forgot_password',$userPage);
	});
	//----------------SOCIAL LOGIN----------------//

	//----------------ALL IMAGE ROUTES----------------//
	Route::get('/image/{folder}/{imageUrl}',
		'ImageCacheController@cacheImage');
	//----------------ALL IMAGE ROUTES----------------//