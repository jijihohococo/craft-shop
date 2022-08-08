<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemPrice extends TransactionModel
{
    use HasFactory;

    protected $fillable=[
        'currency_id',
        'item_variant_id',
        'price',
        'promotion_type',
        'promotion_price',
        'promotion_start_time',
        'promotion_end_time'
    ];

    public function currency(){
        return $this->belongsTo('App\Models\Currency')->withDefault()->withTrashed();
    }
}
