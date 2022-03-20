<?php

namespace App\Models;

use Illuminate\Http\Request;
use App\Models\PassportDate;
use DB;
class TokenRefresh
{
    private $accessTokenCookieName , $refreshTokenCookieName , $redirectURL , $next , $request , $guardName , $clientId ;

    private $loginRequest=FALSE;
    private $apiRequest=FALSE;

    public function setAccessTokenCookieName($accessTokenCookieName){
        $this->accessTokenCookieName=$accessTokenCookieName;
    }

    public function getAccessTokenCookieName(){
        return $this->accessTokenCookieName;
    }

    public function setRefreshTokenCookieName($refreshTokenCookieName){
        $this->refreshTokenCookieName=$refreshTokenCookieName;
    }

    public function getRefreshTokenCookieName(){
        return $this->refreshTokenCookieName;
    }

    public function setRedirectURL($redirectURL){
        $this->redirectURL=$redirectURL;
    }

    public function getRedirectURL(){
        return $this->redirectURL;
    }

    public function setNext($next){
        $this->next=$next;
    }

    public function getNext(){
        return $this->next;
    }

    public function setRequest($request){
        $this->request=$request;
    }

    public function getRequest(){
        return $this->request;
    }

    public function setGuardName($guardName){
        $this->guardName=$guardName;
    }

    public function getGuardName(){
        return $this->guardName;
    }

    public function setClientId($clientId){
        $this->clientId=$clientId;
    }

    public function getClientId(){
        return $this->clientId;
    }

    public function makeLoginRequest(){
        $this->loginRequest=TRUE;
    }

    public function makeApiRequest(){
        $this->apiRequest=TRUE;
    }

    public function make(){
        $accessTokenCookieName=$this->getAccessTokenCookieName();
        $refreshTokenCookieName=$this->getRefreshTokenCookieName();
        $guardName=$this->getGuardName();
        $redirectURL=$this->getRedirectURL();
        $next=$this->getNext();
        $request=$this->getRequest();
        $clientId=$this->getClientId();

        if(isset($_COOKIE[$accessTokenCookieName])){
            $request->headers->set('Authorization','Bearer '.$_COOKIE[$accessTokenCookieName]);
            $user=auth($guardName)->user();
            if($user==null){
                    // IF USER IS LOG OUT OR ACCESS TOKEN IS WRONG //
             removeCookie($accessTokenCookieName);
             if(isset($_COOKIE[$refreshTokenCookieName])){
                removeCookie($refreshTokenCookieName);
            }
            if($this->apiRequest==FALSE){
                return $this->loginRequest==FALSE ? redirect($redirectURL) : $next($request) ;
            }else{
                return response()->json([
                    'message' => 'Unauthenticated'
                ],401);
            }
        }else{
            $tokenExpired=$user->tokenExpired();
            if($tokenExpired==true && isset($_COOKIE[$refreshTokenCookieName]) ){
                return $this->refreshAPI($_COOKIE[$refreshTokenCookieName],$clientId);
            }else{
                if($this->apiRequest==FALSE){
                    return $this->loginRequest==FALSE ? $next($request)  : redirect($redirectURL);
                }else{
                    return $next($request);
                }
            }
        }
    }elseif(!isset($_COOKIE[$accessTokenCookieName]) && isset($_COOKIE[$refreshTokenCookieName]) ){
        return $this->refreshAPI($_COOKIE[$refreshTokenCookieName],$clientId);
    }else{
        if($this->apiRequest==FALSE){
            return $this->loginRequest==FALSE ? redirect($redirectURL) : $next($request);
        }else{
            return response()->json([
                'message' => 'Unauthenticated'
            ],401); 
        }
    }
}

public function refreshAPI($userRefreshToken,$clientId){
    $client = DB::table('oauth_clients')
    ->where('password_client', true)
    ->where('id',$clientId)
    ->first();

    if($client!==NULL){
        $redirectURL=$this->getRedirectURL();
        $accessTokenCookieName=$this->getAccessTokenCookieName();
        $refreshTokenCookieName=$this->getRefreshTokenCookieName();
        $next=$this->getNext();
        $request=$this->getRequest();
        $data = [
            'grant_type' => 'refresh_token',
            'refresh_token' => $userRefreshToken,
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'scope' => ''
        ];
        $newRequest = Request::create('/oauth/token', 'POST', $data);
        $content = json_decode(app()->handle($newRequest)->getContent());

        if(property_exists($content, 'error')){
            if($this->apiRequest==FALSE){
                return $this->loginRequest==FALSE ? redirect($redirectURL) : $next($request) ;
            }else{
                return response()->json([
                    'message' => 'Unauthenticated'
                ],401);
            }
        }

        saveCookie($accessTokenCookieName,$content->access_token,PassportDate::ACCESS_TOKEN_EXPIRE_DAY);

        saveCookie($refreshTokenCookieName,$content->refresh_token,PassportDate::REFRESH_TOKEN_EXPIRE_DAY);

        if($this->apiRequest==FALSE){
            return $this->loginRequest==FALSE ? $next($request) : redirect($redirectURL) ;
        }else{
            return response()->json([
                'message' => 'Loading'
            ]);
        }
    }else{
        if($this->apiRequest==FALSE){
            return $this->loginRequest==FALSE ? redirect($redirectURL) : $next($request) ;
        }else{
            return response()->json([
                'message' => 'Unauthenticated'
            ],401);
        }
    }
}

}
