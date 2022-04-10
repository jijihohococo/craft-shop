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

// Route::get('/', function () {
//     return view('welcome');
// });

// ADMIN ROUTES //
Route::view('/admin/{any}','admin.index')->where('any','.*')->middleware('checkAdminCookie');
// ADMIN ROUTES //

// USER ROUTES //
$userRoutes=[
	//null,
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
		Route::view('/'.$userRoute,'user.index');
	}
// USER ROUTES //