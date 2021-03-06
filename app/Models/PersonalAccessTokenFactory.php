<?php

namespace App\Models;

use Lcobucci\JWT\Parser as JwtParser;
use League\OAuth2\Server\AuthorizationServer;
use Nyholm\Psr7\Response;
use Nyholm\Psr7\ServerRequest;
use Psr\Http\Message\ServerRequestInterface;
use Laravel\Passport\{Passport,ClientRepository,TokenRepository,PersonalAccessTokenResult,Client};
class PersonalAccessTokenFactory
{
    /**
     * The authorization server instance.
     *
     * @var \League\OAuth2\Server\AuthorizationServer
     */
    protected $server;

    /**
     * The client repository instance.
     *
     * @var \Laravel\Passport\ClientRepository
     */
    protected $clients;

    /**
     * The token repository instance.
     *
     * @var \Laravel\Passport\TokenRepository
     */
    protected $tokens;

    /**
     * The JWT token parser instance.
     *
     * @var \Lcobucci\JWT\Parser
     */
    protected $jwt;

    /**Provider Parameter to be used in customizing*/
    protected $guardProviderName;

    /**
     * Create a new personal access token factory instance.
     *
     * @param  \League\OAuth2\Server\AuthorizationServer  $server
     * @param  \Laravel\Passport\ClientRepository  $clients
     * @param  \Laravel\Passport\TokenRepository  $tokens
     * @param  \Lcobucci\JWT\Parser  $jwt
     * @return void
     */


    private $refreshToken;

    public function __construct(AuthorizationServer $server,
        ClientRepository $clients,
        TokenRepository $tokens,
        JwtParser $jwt)
    {
        $this->jwt = $jwt;
        $this->tokens = $tokens;
        $this->server = $server;
        $this->clients = $clients;
    }

    /** Set Guard Provider Name for each creating token process */
    public function setGuardProviderName($guardProviderName){
        $this->guardProviderName=$guardProviderName;
    }

    /**
     * Create a new personal access token.
     *
     * @param  mixed  $userId
     * @param  string  $name
     * @param  array  $scopes
     * @return \Laravel\Passport\PersonalAccessTokenResult
     */
    public function make($userId, $name, array $scopes = [])
    {
        //customize to support multiple guards//

        $clientModel=Client::where('provider',$this->guardProviderName )->first();

        //customize to support multiple guards//

        $response = $this->dispatchRequestToAuthorizationServer(
            $this->createRequest($clientModel , $userId, $scopes)
        );
        $this->setRefreshToken($response['refresh_token']);
        $token = tap($this->findAccessToken($response), function ($token) use ($userId, $name) {
            $this->tokens->save($token->forceFill([
                'user_id' => $userId,
                'name' => $name,
            ]));
        });

        return new PersonalAccessTokenResult(
            $response['access_token'], $token
        );
    }

    public function setRefreshToken($refreshToken){
        $this->refreshToken=$refreshToken;
    }

    public function getRefreshToken(){
        return $this->refreshToken;
    }

    /**
     * Create a request instance for the given client.
     *
     * @param  \Laravel\Passport\Client  $client
     * @param  mixed  $userId
     * @param  array  $scopes
     * @return \Psr\Http\Message\ServerRequestInterface
     */
    protected function createRequest($client, $userId, array $scopes)
    {
        $secret = Passport::$hashesClientSecrets ? $this->clients->getPersonalAccessClientSecret() : $client->secret;

        return (new ServerRequest('POST', 'not-important'))->withParsedBody( $client->personal_access_client==1 ? [
            'grant_type' => 'personal_access',
            'client_id' => $client->id,
            'client_secret' => $secret,
            'user_id' => $userId,
            'scope' => implode(' ', $scopes),
        ] : [
          'grant_type' => 'password',
          'client_id' => $client->id ,
          'client_secret' => $secret ,
          'username' => request()->email ,
          'password' => request()->password ,
          'scope' => implode(' ', $scopes),
      ] );
    }

    /**
     * Dispatch the given request to the authorization server.
     *
     * @param  \Psr\Http\Message\ServerRequestInterface  $request
     * @return array
     */
    protected function dispatchRequestToAuthorizationServer(ServerRequestInterface $request)
    {
        return json_decode($this->server->respondToAccessTokenRequest(
            $request, new Response
        )->getBody()->__toString(), true);
    }

    /**
     * Get the access token instance for the parsed response.
     *
     * @param  array  $response
     * @return \Laravel\Passport\Token
     */
    protected function findAccessToken(array $response)
    {
        return $this->tokens->find(
            $this->jwt->parse($response['access_token'])->claims()->get('jti')
        );
    }
}
