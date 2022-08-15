<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemQuantity extends Model
{
    use HasFactory;

    protected $fillable=[
        'item_variant_id',
        'qty',
        'stock',
        'available_stock'
    ];
}
