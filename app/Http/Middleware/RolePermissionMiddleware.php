<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Traits\RolePermission;
use App\Models\{UserData,Admin};
class RolePermissionMiddleware
{
    use RolePermission;
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next,$model , $permission)
    {
        $admin=auth(Admin::API)->user();
        if($admin==NULL){
            return unauthenticated();
        }
        
        if($this->checkRoleAndPermission($admin->id,$model,$permission)){
            UserData::setGuard(Admin::API);
            UserData::setId($admin->id);
            return $next($request);
        }else{
            return unauthorized();
        }
    }
}
