<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;


use App\Models\Admin;
use App\Traits\TokenTrait;
class CheckAdminCookieMiddleware
{

    use TokenTrait;
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

        $tokenRefresh=$this->setTokenData([
            'access_token' => 'admin_access_token',
            'refresh_token' => 'admin_refresh_token',
            'api' => 'admin_api',
            'client_id' => Admin::$clientId
        ],$next,$request);
        
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
