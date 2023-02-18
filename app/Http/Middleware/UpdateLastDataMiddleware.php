<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class UpdateLastDataMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next,$model)
    {
        $model='App\Models\\'.$model;
        $data=$model::select('id')
        ->whereIn('item_variant_id',function($query) use($request) {
            $query->select('item_variant_id')
            ->where('id',$request->route('id'));
        })->orderBy('id','DESC')->first();
        return $data!==NULL && $data->id==$request->route('id') ?
        $next($request) : unauthorized();
    }
}
