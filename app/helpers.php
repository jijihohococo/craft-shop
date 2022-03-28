<?php

function starPercentage($starData){
	return ($starData/5)*100;
}

function saveCookie(string $key,$value,$time){
	setcookie($key, $value, [
		'expires' =>  time() + (86400 * $time),
		'path' => '/',
		'domain' => 'localhost',
		'secure' => true,
		'httponly' => true,
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

function oneFileUpload(array $array,$request,$data){
	$oldFile='old_file';
	$requestFile=$request->file($array['file']);
	if ($request->hasFile( $array['file'] ) && checkExtension($request->file($array['file'])->getClientOriginalName()) &&
		blockFile($requestFile ) ) {
			//check if the update function is called this function //
		
		if($array['old_file']!==null){
			\File::delete(storage_path('app/public/'.$array['path'].'/'.$array[ $oldFile ]));
		}
		$extension='webp';

		$fileName=str_replace('/', '',$array['name']. '.' .$extension );

		if($array['width']!==null && $array['height']!==null){

			$requestFile=\Image::make($requestFile)->resize($array['width'],$array['height'] , function($imageSize) {
				$imageSize->aspectRatio();
			})->encode( $extension );
		// //make folder in storage app public before run this code//
			// Storage::disk('public')->put( $array['path'] .'/'. $fileName , $requestFile );
		}
		
		if($array['width']==null && $array['height']==null){

			// $requestFile->move(storage_path( 'app/public/' . $array['path']),$fileName  );
			$requestFile=\Image::make($requestFile)->encode( $extension );
		}

		Storage::disk('public')->put( $array['path'] .'/'. $fileName , $requestFile );

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
				
				$requestFile=\Image::make($file )->encode($extension);

				Storage::disk('public')->put( $array['path'] . '/' . $fileName , $requestFile );
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

function changeDaysToMinutes(int $days){
	return $days * 1440 ;
}

function changeDaysToSeconds(int $days){
	return $days * 86400;
}