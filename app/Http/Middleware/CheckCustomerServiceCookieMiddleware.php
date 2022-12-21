<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\CustomerService;
class CheckCustomerServiceCookieMiddleware
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
        $customerServiceLogin=customerServiceLogin();
        $tokenRefresh=setTokenData([
            'access_token' => CustomerService::ACCESS_TOKEN,
            'refresh_token' => CustomerService::REFRESH_TOKEN,
            'api' => CustomerService::API,
            'client_id' => CustomerService::$clientId
        ],$next,$request);
        
        if($currentURL==$customerServiceLogin && isset($_COOKIE[CustomerService::ACCESS_TOKEN] ))
        {
            $tokenRefresh->setRedirectURL('customer_service/dashboard');
            $tokenRefresh->makeLoginRequest();
            return $tokenRefresh->make();
        }elseif($currentURL!==$customerServiceLogin && explode('/',$currentURL)[1]=='customer_service' ){
            $tokenRefresh->setRedirectURL('customer_service/login');
            return $tokenRefresh->make();
        }
        return $next($request);
    }
}
