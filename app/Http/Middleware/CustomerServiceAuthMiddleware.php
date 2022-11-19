<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

use App\Models\CustomerService;
class CustomerServiceAuthMiddleware
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
            'access_token' => CustomerService::ACCESS_TOKEN,
            'refresh_token' => CustomerService::REFRESH_TOKEN,
            'api' => CustomerService::API,
            'client_id' => CustomerService::$clientId
        ],$next,$request);
        $tokenRefresh->makeApiRequest();
        return $tokenRefresh->make();
    }
}
