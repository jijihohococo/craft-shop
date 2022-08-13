<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\ItemDataTrait;
class ItemVariant extends Model
{
    use HasFactory,ItemDataTrait;

    public function item(){
        return $this->belongsTo('App\Models\Item')->withDefault()->withTrashed();
    }

    public function color(){
        return $this->belongsTo('App\Models\Color')->withDefault()->withTrashed();
    }

    public function images(){
        return $this->hasMany('App\Models\ItemImage');
    }

    public function scopeSelectColor($query){
        return $query->addSelect(['color_name' => function($query) {
            $query->select('name')
            ->from('colors')
            ->whereColumn('color_id','colors.id')
            ->limit(1);
        } ]); 
    }
}
