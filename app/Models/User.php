<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Traits\{HasApi,SearchNameTrait,SearchEmailTrait,CreateAndUpdateSearch};

class User extends Authenticatable
{
    use HasApi, HasFactory, Notifiable , SearchNameTrait , SearchEmailTrait,CreateAndUpdateSearch;

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
    public static $clientId=2;

    public $tokenName='User';

    public $guardProviderName='users';
    //----- Need to assign clientId and tokenName class's variables to access customized Passport function -----//
}
