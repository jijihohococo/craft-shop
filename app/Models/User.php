<?php

namespace App\Models;


class User extends Authenticated
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    //----- Need to assign clientId and tokenName class's variables to access customized Passport function -----//
    public static $clientId=4;

    public $tokenName='User';

    public $guardProviderName='users';
    //----- Need to assign clientId and tokenName class's variables to access customized Passport function -----//

    //----- Token Information  -----//
    public const ACCESS_TOKEN='access_token';
    public const REFRESH_TOKEN='refresh_token';
    public const API='user_api';
    //----- Token Information  -----//
}
