<?php

namespace App\Models;

use App\Traits\ItemVariantTrait;
class ItemQuantity extends TransactionModel
{
    use ItemVariantTrait;

    protected $fillable=[
        'item_variant_id',
        'qty',
        'stock',
        'available_stock'
    ];
}
