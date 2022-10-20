<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Socialite;
use App\Traits\SocialLoginTrait;
use App\Repositories\{ShoppingCartRepositoryInterface,WishListRepositoryInterface};
class SocialLoginController extends Controller
{
    //
    use SocialLoginTrait;
    
    public $socialArray=['facebook','google'];

    protected $shoppingCart , $wishList;

    public function __construct(ShoppingCartRepositoryInterface $shoppingCart,WishListRepositoryInterface $wishList){
        $this->shoppingCart=$shoppingCart;
        $this->wishList=$wishList;
    }

    public function redirect($social)
    {

        return in_array($social, $this->socialArray ) ? Socialite::driver($social)->stateless()->redirect() : abort(404);
    }
    /**
     * Return a callback method from facebook api.
     *
     * @return callback URL from facebook
     */
    
    public function fbCallBack(){
        return $this->socialLogin('facebook');
    }
    public function googleCallBack(){
        return $this->socialLogin('google');
    }
}
