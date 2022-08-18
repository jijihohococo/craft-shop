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

    public function scopeSelectAttributesByItemColumn($query,$column,$id){
        return $query->whereIn('item_id',function($query) use ($column,$id) {
            $query->select('id')
            ->from('items')
            ->where($column,$id);
        });
    }


}
