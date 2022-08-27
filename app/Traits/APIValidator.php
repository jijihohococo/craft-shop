<?php

namespace App\Traits;

use Validator;
trait APIValidator{

	public function makeInputData($content,$contentId,$search){
		return [
			'content' => $content ,
			'contentId' => $contentId ,
			'search' => $search
		];
	}

	public function makeValidator($inputData,$arrayData){
        return Validator::make( $inputData ,  [
            'content' => 'in:'.implode(',', $arrayData ) ,
            'contentId' => ['nullable','integer']
        ]);
    }

    public function makeErrorMessage($validator){
    	return response()->json([
                'message' => 'The given data was invalid.',
                'errors'  => $validator->errors()
            ],422);
    }


}