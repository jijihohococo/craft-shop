<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemAttributeSet extends Model
{
    use HasFactory;

    protected $fillable=[
        'item_attribute_id',
        'set_id'
    ];
}
