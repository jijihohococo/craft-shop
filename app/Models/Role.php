<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\{Model,SoftDeletes};
use App\Events\{CreatedTransaction,UpdatedTransaction,DeletedTransaction,RestoredTransaction};

class Role extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'name'];

    protected $dates = ['deleted_at'];

    public static $content="Role";

    protected $dispatchesEvents=[
        'created' => CreatedTransaction::class,
        'updated' => UpdatedTransaction::class,
        'deleted' => DeletedTransaction::class,
        'restored' => RestoredTransaction::class
    ];

    public function permissions(){
        return $this->hasMany('App\Models\RolePermission');
    }
}
