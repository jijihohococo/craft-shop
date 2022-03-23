<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable =[
        'guard',
        'user_id',
        'model',
        'model_id',
        'action'
    ];

    public function scopeSelectAdminName($query){
        return $query->addSelect(['admin_name'=> function($query){
                $query->select('name')
                ->from('admins')
                ->whereColumn('user_id','admins.id')
                ->limit(1);
            }]);
    }

    public function scopeSelectAdminEmail($query){
        return $query->addSelect(['admin_email'=> function($query){
                $query->select('email')
                ->from('admins')
                ->whereColumn('user_id','admins.id')
                ->limit(1);
            }]);
    }


    public function scopeSelectAdminModel($query,$model,$model_id){
        return $query->where('guard','admin_api')
            ->where('model',$model)
            ->where('model_id',$model_id);
    }
}
