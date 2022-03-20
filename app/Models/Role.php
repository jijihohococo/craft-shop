<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\{Model,SoftDeletes};

class Role extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'name'];

    protected $dates = ['deleted_at'];

    public static $content="Role";

    public function permissions(){
        return $this->hasMany('App\Models\RolePermission');
    }
}
