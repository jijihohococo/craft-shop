<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\User;
class CheckUserCookieMiddleware
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
        $tokenRefresh=setTokenData([
            'access_token' => User::ACCESS_TOKEN,
            'refresh_token' => User::REFRESH_TOKEN,
            'api' => User::API,
            'client_id' => User::$clientId
        ],$next,$request);
        if(isset($_COOKIE[User::ACCESS_TOKEN] )){
            $tokenRefresh->setRedirectURL('/');
            $tokenRefresh->makeLoginRequest();
            return $tokenRefresh->make();
        }
        return $next($request);
    }
}
