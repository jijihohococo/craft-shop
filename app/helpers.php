<?php

use App\Models\{PassportDate,TokenRefresh,User};
use Illuminate\Support\Facades\Route;
function dataNotFound(){
	return response()->json(['message' => 'Data not found'],404);
}

function getModel($column){
	return ucfirst(str_replace( ['_id'] , '',$column));
}
function makeLink($string){
	return strtolower(preg_replace('/\s+/', '_', $string ));
}
function makePassword($request){
	$request->merge([
		'password' => \Hash::make($request->password)
	]);
}
function uniqueColumn($table,$id,$column='name'){
	return ['required', 'string', 'max:100', $id==null ? 'unique:'.$table : 'unique:'.$table.','.$column.','.$id ];
}
function loginFailed(){
	return response()->json([
		'message' => 'The given data was invalid.',
		'errors' => [
			'account' => ['Login Failed']
		]
	],401);
}
function stockWarning(){
	return 'The available stock is more than actual stock';
}
function makeErrorMessage($errors){
	return response()->json([
		'message' => 'The given data was invalid.',
		'errors'  => $errors
	],422);
}
function getLastData($field){
	return " SUBSTRING_INDEX( GROUP_CONCAT(".$field.") ,',',1) ";
}
function getToken(array $data,$token,$message){
	return response()->json([
		'message' => $message
	])->withCookie( cookie($data['access_token'], $token->original['access_token'], changeDaysToMinutes(PassportDate::ACCESS_TOKEN_EXPIRE_DAY), null, null, true) )
	->withCookie( cookie($data['refresh_token'],$token->original['refresh_token'],changeDaysToMinutes(PassportDate::REFRESH_TOKEN_EXPIRE_DAY),null,null,true) );
}

function setTokenData(array $data,$next,$request){
	$tokenRefresh=new TokenRefresh;
	$tokenRefresh->setAccessTokenCookieName($data['access_token']);
	$tokenRefresh->setRefreshTokenCookieName($data['refresh_token']);
	$tokenRefresh->setNext($next);
	$tokenRefresh->setRequest($request);
	$tokenRefresh->setGuardName($data['api']);
	$tokenRefresh->setClientId($data['client_id']);
	return $tokenRefresh;
}

function adminItemVariantResourceApi($plural,$controller){
	Route::get('item_variant_'.$plural.'/{itemVariantId}','Admin\\'.$controller.'@index');
	Route::get('search_item_variant_'.$plural.'/{itemVariantId}','Admin\\'.$controller.'@search');
	Route::post('save_item_variant_'.$plural.'/{itemVariantId}','Admin\\'.$controller.'@store');
	Route::get('item_variant_'.$plural.'/{id}/edit','Admin\\'.$controller.'@edit');
	Route::post('update_item_variant_'.$plural.'/{id}','Admin\\'.$controller.'@update');
}

function adminResourceApi($content,$plural,$controller){
	Route::resource($plural,'Admin\\'.$controller);
	Route::get($content.'_search','Admin\\'.$controller.'@search');
	Route::get($content.'_trash_search','Admin\\'.$controller.'@trashSearch');
	Route::delete($content.'_restore/{id}','Admin\\'.$controller.'@restore');
	Route::get('trash_'.$plural,'Admin\\'.$controller.'@trash');
	Route::delete('delete_'.$plural,'Admin\\'.$controller.'@deleteMultiple');
	Route::delete('restore_'.$plural,'Admin\\'.$controller.'@restoreMultiple');
}

function out($result){
	return response()->json([
		'message' => 'Log out success'
	])->withCookie($result['cookie'])
	->withCookie($result['refreshCookie']);
}

function unauthorized(){
	return response()->json([
		'message' => 'Unauthorized'
	],403);
}

function unauthenticated(){
	return response()->json([
		'message' => 'Unauthenticated'
	],401);
}

function authId(){
	$user=auth(User::API)->user();
	return $user==NULL ? NULL : $user->id; 
}

function getUserId($userId=NULL){

	if(isset($_COOKIE['userId'])){
		$customerId=$_COOKIE['userId'];
	}else{
		$customerId=rand(10,100) . uniqid();
		saveCookie('userId',$customerId,PassportDate::ACCESS_TOKEN_EXPIRE_DAY , false);
	}

	return $userId==null ? $customerId : $userId;

}

function addMultipleContents(array $array){
	if(isset($array['col_one']) && isset($array['col_two']) ){
		$saved=function() use($array){
			$objArray=[];
			foreach(array_filter($array['col_one']) as $key => $colOne){
				if(isset($array['col_two'][$key])){
					array_push($objArray,[
						$array['parent_id'] => $array['parent_data'],
						$array['child_col_one'] => $colOne,
						$array['child_col_two'] => $array['col_two'][$key]
					]);
				}
			}
			if(!empty($objArray)){
				$array['obj']::insert($objArray);
			}
		};
		if($array['update']=='yes' && 
			(($array['old_child_col_one']+$array['child_col_one']!==$array['old_child_col_one']) ||
				($array['old_child_col_two']+$array['child_col_two']!==$array['old_child_col_two']))
		){
			$array['obj']::where($array['parent_id'],$array['parent_data'])->delete();
		$saved();
	}elseif($array['update']==NULL){
		$saved();
	}
}
}

function add_high_light(array $array){
	if(isset($array['col'])){
		$saved=function() use($array) {
			$objArray=[];
			foreach(array_filter($array['col']) as $data){
				array_push($objArray , [
					$array['parent_id']=>$array['parent_data'],
					$array['child_col']=>$data
				]);
			}
			if(!empty($objArray)){
				$array['obj']::insert($objArray);
			}
		};
		if($array['update']=="yes" && 
			($array['old_col']+$array['col']!==$array['old_col']) ){
			$array['obj']::where($array['parent_id'],$array['parent_data'])->delete();
		$saved();
	}elseif($array['update']==NULL){
		$saved();
	}
}

}

function cosineSimilarity($x,$y){
	$result=[];
	$xPow=[];
	$yPow=[];
	foreach($x as $key => $d1){
		if(isset($y[$key]) ){
			$result[]= $d1*$y[$key];
			$xPow[]=pow($d1, 2);
			$yPow[]=pow($y[$key],2);
		}
	}
	$divisor=sqrt(array_sum($xPow))*sqrt(array_sum($yPow));
	$total=array_sum($result);
	return $divisor==0 ? $total : $total/$divisor;
}

function starPercentage($starData){
	return ($starData/5)*100;
}

function mean(array $array){
	return array_sum($array) / count($array);
}

function saveCookie(string $key,$value,$day,$httpOnly=true){
	setcookie($key, $value, [
		'expires' =>  time() + changeDaysToSeconds($day),
		'path' => '/',
		'domain' => 'localhost',
		'secure' => true,
		'httponly' => $httpOnly,
		'samesite' => 'Lax',
	]);
}

function removeCookie(string $key){
	unset($_COOKIE[$key]); 
	setcookie($key, null, -1, '/');
}

function expired($date){
	return $date <= date('Y-m-d H:i:s');
}

function getCurrentURL(){
	return parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
}

function customerServiceLogin(){
	return '/customer_service/login';
}

function adminLogin(){
	return '/admin/login';
}

function checkExtension($file){
	foreach (['.php', 
		'.sys', 
		'.js',
		'.sys',
		'.js',
		'.py',
		'.null',
		'.sh',
		'.html',
		'.txt',
// start blocking archive file extensions
		'.zip',
		'.7z',
		'.a',
		'.ar',
		'.cpio',
		'.shar',
		'.iso',
		'.lbr',
		'.mar',
// end blocking archive file extensions
		'.htaccess',
		'.exe',
		'.com',
		'.cmd',
		'.bat',
		'.pif',
		'.vb',
		'.vba',
		'.vbs',
		'.msi',
		'.reg',
		'.ws',
		'.wsc',
		'.wsf',
		'.cpl',
		'.lnk',
		'.scr',
		'.phtml',
		'<img',
		'.docm'] as $key => $value) {
			# code...
		return !strpos($file, $value);
}
}
function blockFile($file){

	foreach(['<?php',
		'<script',
		'<?=',
		'#include<stdio.h>'] as $value  ){
		return !strpos(file_get_contents($file),$value);

}
}

function fileUpload($array,$requestFile,$fileName){
	$extension='webp';
	if($array['width']!==null && $array['height']!==null){

			// $requestFile=\Image::make($requestFile)->resize($array['width'],$array['height'] , function($imageSize) {
			// 	$imageSize->aspectRatio();
			// })->encode( $extension );
		$requestFile=\Image::make($requestFile)->resize($array['width'],$array['height'])->encode($extension);

		// //make folder in storage app public before run this code//
			// Storage::disk('public')->put( $array['path'] .'/'. $fileName , $requestFile );
	}
	
	if($array['width']==null && $array['height']==null){

			// $requestFile->move(storage_path( 'app/public/' . $array['path']),$fileName  );
		$requestFile=\Image::make($requestFile)->encode( $extension );
	}

	Storage::disk('public')->put( $array['path'] .'/'. $fileName , $requestFile );
}
function oneFileUpload(array $array,$request,$data){
	$oldFile='old_file';
	$requestFile=$request->file($array['file']);
	if ($request->hasFile( $array['file'] ) && checkExtension($request->file($array['file'])->getClientOriginalName()) &&
		blockFile($requestFile ) ) {
			//check if the update function is called this function //
		$extension='webp';
	if($array[$oldFile]!==null){
		\File::delete(storage_path('app/public/'.$array['path'].'/'.$array[ $oldFile ]));
	}

	$fileName=str_replace('/', '',$array['name']. '.' .$extension );

	fileUpload($array,$requestFile,$fileName);

	$data[$array['file']]=$fileName;
}
if(!$request->hasFile( $array['file']) && $array[ $oldFile ]!==null ){
	$data[$array['file']]=$array[ $oldFile ];
}

}

function upload_document($request,array $array){
	if(!empty($request)){
		$documentData=[];
		foreach ($request as $key => $file) {
			$rand=rand();
			$extension='webp';
			if( checkExtension( $file->getClientOriginalName() )  ){
				$fileName=$rand.$array['name'].'.'.$extension;

				array_push($documentData,[ $array['id']  => $array['data_id'] ,
					$array['file'] => $fileName , 
					'created_at' => NOW()
				]);

				fileUpload($array,$file,$fileName);
				
				// $requestFile=\Image::make($file )->encode($extension);

				// Storage::disk('public')->put( $array['path'] . '/' . $fileName , $requestFile );
				//$file->move(storage_path('app/public/'.$array['path'] ), $fileName );
			}
		}
		$array['obj']::insert($documentData); 
	}

}

function cutSpeicialChar($string){
	return str_replace("'", '', str_replace('/', '', str_replace('.', '', $string ) ) );
}

function requiredImage(){
	return 'required|image|mimes:jpeg,jpg,png,svg,gif,webp|max:4096';
}
function nullableImage(){
	return 'nullable|image|mimes:jpeg,jpg,png,svg,gif,webp|max:4096';
}

function requiredDouble(){
	return 'required|numeric|between:0.000,999999999.99';
}

function changeDaysToMinutes(int $days){
	return $days * 1440 ;
}

function changeDaysToSeconds(int $days){
	return $days * 86400;
}

function regexForName(){
	return	'regex:/^[A-Za-z_ ]+$/';
}