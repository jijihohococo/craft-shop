<?php

namespace App\Models;

class ItemQuantity extends TransactionModel
{

    protected $fillable=[
        'item_variant_id',
        'qty',
        'stock',
        'available_stock'
    ];
}
