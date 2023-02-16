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
        $tokenRefresh=setTokenData([
            'access_token' => Admin::ACCESS_TOKEN,
            'refresh_token' => Admin::REFRESH_TOKEN,
            'api' => Admin::API,
            'client_id' => Admin::$clientId
        ],$next,$request);
        
        if(($currentURL==$adminLogin || 
            $currentURL=='/admin' ||
            $currentURL=='/admin/' ) && isset($_COOKIE[Admin::ACCESS_TOKEN] ))
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
