<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;


use App\Models\{Admin,TokenRefresh};
class CheckAdminCookieMiddleware
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
        $currentURL=getCurrentURL();
        $adminLogin=adminLogin();

        $tokenRefresh=new TokenRefresh;
        $tokenRefresh->setAccessTokenCookieName('admin_access_token');
        $tokenRefresh->setRefreshTokenCookieName('admin_refresh_token');
        $tokenRefresh->setNext($next);
        $tokenRefresh->setRequest($request);
        $tokenRefresh->setGuardName('admin_api');
        $tokenRefresh->setClientId(Admin::$clientId);
        
        if($currentURL==$adminLogin && isset($_COOKIE['admin_access_token'] ))
        {
            $tokenRefresh->setRedirectURL('admin/dashboard');
            $tokenRefresh->makeLoginRequest();
            return $tokenRefresh->make();
        }elseif($currentURL!==$adminLogin && explode('/',$currentURL)[1]=='admin' ){
            $tokenRefresh->setRedirectURL('admin/login');
            return $tokenRefresh->make();
        }
        return $next($request);
    }
}
