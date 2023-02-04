<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\{WishList,UserData,DeleteData};
class WishListDelete
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
        $wishList=WishList::where('item_id',$request->item_id)->first();
        $userId=(string) getUserId( authId() );
        UserData::setId($userId);
        DeleteData::set($wishList);
        if($wishList!==NULL && $wishList->user_id==$userId){
            return $next($request);
        }
        return unauthorized();
    }
}
