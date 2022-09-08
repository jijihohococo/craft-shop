<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

use App\Models\Admin;
use App\Traits\TokenTrait;
class AdminAuthMiddleware
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
        $tokenRefresh=$this->setTokenData([
            'access_token' => 'admin_access_token',
            'refresh_token' => 'admin_refresh_token',
            'api' => 'admin_api',
            'client_id' => Admin::$clientId
        ],$next,$request);
        $tokenRefresh->makeApiRequest();
        return $tokenRefresh->make();
    }
}
