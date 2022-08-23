<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

use App\Models\{Admin,TokenRefresh};
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
    }
}
