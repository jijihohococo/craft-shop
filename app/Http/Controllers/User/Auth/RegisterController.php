<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Repositories\{ShoppingCartRepositoryInterface,WishListRepositoryInterface};
use DB;
class RegisterController extends Controller
{
    //

    private $shoppingCart , $wishList ;

    public function __construct(ShoppingCartRepositoryInterface $shoppingCart,WishListRepositoryInterface $wishList){
        $this->shoppingCart=$shoppingCart;
        $this->wishList=$wishList;
    }

    private function validateData(){
        return [
            'name' => ['required', 'string', 'max:100', 'unique:users' ] ,
            'email' => ['required', 'email' , 'max:100', 'unique:users' ] ,
            'password' => ['required', 'string', 'min:8', 'confirmed']
        ];
    }

    public function register(Request $request){
        try{
            $request->validate($this->validateData());
            DB::beginTransaction();
            $user=User::create( $request->all() );
            $token=$user->passportToken();
            $this->shoppingCart->update( (string) $user->id);
            $this->wishList->update( (string) $user->id );
            DB::commit();
            return getToken(['access_token' => User::ACCESS_TOKEN ,
                'refresh_token' => User::REFRESH_TOKEN  ],$token,'Registration is Success');
        }catch(\Throwable $e){
            DB::rollback();
            return loginFailed();
        }
    }
}
