<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Events\{CreatedTransaction,UpdatedTransaction,DeletedTransaction,RestoredTransaction};
abstract class TransactionModel extends Model{

	protected $dispatchesEvents=[
		'created' => CreatedTransaction::class,
		'updated' => UpdatedTransaction::class,
		'deleted' => DeletedTransaction::class,
		'restored' => RestoredTransaction::class
	];

}