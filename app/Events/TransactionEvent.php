<?php

namespace App\Events;

abstract class TransactionEvent{

	public $model;

	public function __construct($model){
		$this->model=$model;
	}

}