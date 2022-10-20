<?php

namespace App\Http\Controllers\User\Auth;


use Illuminate\Http\Request;
use App\Models\User;
use App\Repositories\{ShoppingCartRepositoryInterface,WishListRepositoryInterface};
use DB;
use App\Traits\Logout;
class LoginController
{
    //
    use Logout;

    protected $accessToken , $refreshToken , $authAPI , $shoppingCart , $wishList;

    public function __construct(ShoppingCartRepositoryInterface $shoppingCart,WishListRepositoryInterface $wishList){
        $this->accessToken=User::ACCESS_TOKEN;
        $this->refreshToken=User::REFRESH_TOKEN;
        $this->authAPI=User::API;
        $this->shoppingCart=$shoppingCart;
        $this->wishList=$wishList;
    }

    public function login(Request $request){
        $request->validate([
            'email' => ['required','email'],
            'password' => ['required']
        ]);
        
        
        try{
            $user=User::where('email',$request->email)->first();
            DB::beginTransaction();
            $token=$user->passportToken();
            $this->shoppingCart->update( (string)  $user->id  );
            $this->wishList->update( (string) $user->id );
            DB::commit();
            return getToken(['access_token' => $this->accessToken ,
            'refresh_token' => $this->refreshToken  ],$token,'Login is Success');

        }catch(\Throwable $e){
            DB::rollback();
            return loginFailed();
        }
    }

    public function logOut(Request $request){
        try{
            DB::beginTransaction();
            $result=$this->revoke();
            $this->shoppingCart->logOutUpdate( (string) $this->user->id );
            $this->wishList->logOutUpdate( (string) $this->user->id );
            DB::commit();
            return out($result);
        }catch(\Throwable $e){
            DB::rollback();
            return unauthenticated();
        }
    }
}
