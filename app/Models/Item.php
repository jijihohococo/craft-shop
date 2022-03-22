<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\{Model,SoftDeletes};
use App\Events\{CreatedTransaction,UpdatedTransaction,DeletedTransaction,RestoredTransaction};
class Item extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable=[
        'name',
        'category_id',
        'description'
    ];
    protected $dates = ['deleted_at'];

    public static $content="Item";

    protected $dispatchesEvents=[
        'created' => CreatedTransaction::class,
        'updated' => UpdatedTransaction::class,
        'deleted' => DeletedTransaction::class,
        'restored' => RestoredTransaction::class
    ];

    public function category(){
        return $this->belongsTo('App\Models\Category')->withDefault()->withTrashed();
    }

    public function pics(){
        return $this->hasMany('App\Models\ItemImage');
    }
}
