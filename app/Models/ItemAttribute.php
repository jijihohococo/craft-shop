<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemAttribute extends Model
{
    use HasFactory;

    protected $fillable=[
        'item_id',
        'attribute_id'
    ];

    public function attribute(){
        return $this->belongsTo('App\Models\Attribute')->withDefault()->withTrashed();
    }

    public function sets(){
        return $this->hasMany('App\Models\ItemAttributeSet');
    }


}
