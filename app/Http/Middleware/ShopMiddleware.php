<?php

namespace App\Http\Middleware;

use Closure,View;
use Illuminate\Http\Request;
use App\Models\Shop;
class ShopMiddleware
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
        View::share([
            'shop' => Shop::findOrFail(1)
        ]);
        return $next($request);
    }
}
