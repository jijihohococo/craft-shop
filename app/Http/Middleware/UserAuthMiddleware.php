<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\TokenRefresh;
use App\Models\User;
class UserAuthMiddleware
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
        $tokenRefresh->setAccessTokenCookieName('user_access_token');
        $tokenRefresh->setRefreshTokenCookieName('user_refresh_token');
        $tokenRefresh->setNext($next);
        $tokenRefresh->setRequest($request);
        $tokenRefresh->setGuardName('user_api');
        $tokenRefresh->setClientId(User::$clientId);
        $tokenRefresh->makeApiRequest();
        return $tokenRefresh->make();
    }
}
