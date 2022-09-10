<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

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
        $tokenRefresh=setTokenData([
            'access_token' => Admin::ACCESS_TOKEN,
            'refresh_token' => Admin::REFRESH_TOKEN,
            'api' => Admin::API,
            'client_id' => Admin::$clientId
        ],$next,$request);
        $tokenRefresh->makeApiRequest();
        return $tokenRefresh->make();
    }
}
