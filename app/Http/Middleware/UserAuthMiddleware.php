<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

use App\Models\User;
use App\Traits\TokenTrait;
class UserAuthMiddleware
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
            'access_token' => 'user_access_token',
            'refresh_token' => 'user_refresh_token',
            'api' => 'user_api',
            'client_id' => User::$clientId
        ],$next,$request);
        $tokenRefresh->makeApiRequest();
        return $tokenRefresh->make();
    }
}
