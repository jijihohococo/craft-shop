<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Events\{CreatedTransaction,UpdatedTransaction,DeletedTransaction,RestoredTransaction};
use App\Traits\{CreateAndUpdateSearch,SearchTrashTrait};
abstract class TransactionModel extends Model{

	use HasFactory,CreateAndUpdateSearch,SearchTrashTrait;
	
	protected $dispatchesEvents=[
		'created' => CreatedTransaction::class,
		'updated' => UpdatedTransaction::class,
		'deleted' => DeletedTransaction::class,
		'restored' => RestoredTransaction::class
	];

}