<?php

namespace App\Traits;

use App\Events\CreatedTransaction;

trait TransactionAction{

	protected $dispatchesEvents=[
		'created' => CreatedTransaction::class
	];

}