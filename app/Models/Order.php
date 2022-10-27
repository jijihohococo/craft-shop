<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UserDataTrait;
class Order extends Model
{
    use HasFactory,UserDataTrait;

    protected $fillable=[
        'user_id',
        'delivery_price',
        'delivery_currency_id',
        'currency_id',
        'address',
        'country_id',
        'state_id',
        'city_id',
        'note',
        'status'
    ];


    public function scopeGetTotalQtyAndPrice($query){
        return $query->addSelect([
            'total_qty' => function($query){
                $query->from('order_details')
                ->whereColumn('id','order_details.order_id')
                ->sum('qty');
            } ,
            'total_price' => function($query){
                $query->from('order_details')
                ->whereColumn('id','order_details.order_id')
                ->sum('price');
            }
        ]);
    }
}
