<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\TokenRefresh;
use App\Models\Admin;
class AdminAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $tokenRefresh=new TokenRefresh;
        $tokenRefresh->setAccessTokenCookieName('admin_access_token');
        $tokenRefresh->setRefreshTokenCookieName('admin_refresh_token');
        $tokenRefresh->setNext($next);
        $tokenRefresh->setRequest($request);
        $tokenRefresh->setGuardName('admin_api');
        $tokenRefresh->setClientId(Admin::$clientId);
        $tokenRefresh->makeApiRequest();
        return $tokenRefresh->make();


        
        // if( isset($_COOKIE['admin_access_token']) ){
        //     $request->headers->set('Authorization','Bearer '. $_COOKIE['admin_access_token'] );
            
        //     $admin=auth('admin_api')->user();
        //     if($admin!==NULL){
        //         return $next($request);
        //     }else{
        //         return response()->json([
        //             'message' => 'Unauthenticated'
        //         ],401);
        //     }
        // }else{
        //     return response()->json([
        //         'message' => 'Unauthenticated'
        //     ],401);
        // }
    }
}
