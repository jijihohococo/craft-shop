<?php

namespace App\Traits;

use Validator;
trait APIValidator{

	public function makeInputData($content,$link,$search){
		return [
			'content' => $content ,
			'link' => $link ,
			'search' => $search
		];
	}

	public function makeValidator($inputData,$arrayData){
        return Validator::make( $inputData ,  [
            'content' => 'in:'.implode(',', $arrayData ) ,
            'link' => ['nullable','string']
        ]);
    }


}