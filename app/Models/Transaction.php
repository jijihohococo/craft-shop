<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CreateAndUpdateSearch;
class Transaction extends Model
{
    use HasFactory,CreateAndUpdateSearch;

    protected $fillable =[
        'guard',
        'user_id',
        'model',
        'model_id',
        'action'
    ];

    public function scopeSelectAdmin($query){
        return $query->addSelect(['admin_name'=> function($query){
                $query->select('name')
                ->from('admins')
                ->whereColumn('user_id','admins.id')
                ->limit(1);
            } ,
            'admin_email'=> function($query){
                $query->select('email')
                ->from('admins')
                ->whereColumn('user_id','admins.id')
                ->limit(1);
            }
              ]);
    }


    public function scopeSelectAdminModel($query,$model,$model_id){
        return $query->where('guard',Admin::API)
            ->where('model',$model)
            ->where('model_id',$model_id);
    }
}
