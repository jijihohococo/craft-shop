<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemVariant extends Model
{
    use HasFactory;

    public function item(){
        return $this->belongsTo('App\Models\Item')->withDefault()->withTrashed();
    }

    public function color(){
        return $this->belongsTo('App\Models\Color')->withDefault()->withTrashed();
    }

    public function images(){
        return $this->hasMany('App\Models\ItemImage');
    }
}
