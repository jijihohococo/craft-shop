<?php

namespace App\Traits;

use DB;
use App\Models\Permission;
trait RolePermission{

	public function checkRoleAndPermission($adminId,$model,$action){
		if(!in_array($model, Permission::getModels()) || !in_array($action,Permission::getActions()) ){
			return FALSE;
		}

        return DB::table('roles')
        ->select('roles.id')
        ->where('roles.deleted_at',NULL)
        ->whereIn('roles.id',function($query) use($adminId,$model,$action){
            $query->select('admin_roles.role_id')
            ->from('admin_roles')
            ->where('admin_roles.admin_id',function($query) use($adminId){
                $query->select('id')
                ->from('admins')
                ->where('admins.id',$adminId)
                ->limit(1);
            })
            ->whereIn('admin_roles.role_id',function($query) use($model,$action){
                $query->select('role_permissions.role_id')
                ->from('role_permissions')
                ->whereIn('role_permissions.permission_id',function($query) use($model,$action) {
                    $query->select('permissions.id')
                    ->from('permissions')
                    ->where('permissions.model',$model)
                    ->where('permissions.'.$action,TRUE)
                    ->where('permissions.deleted_at',NULL);
                });
            });
        } )->count() > 0;
    }

}