<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\{ItemDataTrait,CurrencyDataTrait};
class OrderDetail extends Model
{
    use HasFactory,ItemDataTrait,CurrencyDataTrait;

    public function order(){
        return $this->belongsTo('App\Models\Order');
    }
}
