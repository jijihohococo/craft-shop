<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Traits\{HasApi,CreateAndUpdateSearch,DeleteSearch,SearchNameTrait,SearchEmailTrait};
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Events\{CreatedTransaction,UpdatedTransaction,DeletedTransaction,RestoredTransaction};
class CustomerService extends Authenticatable
{
    use HasApi, HasFactory , Notifiable , SoftDeletes , CreateAndUpdateSearch , DeleteSearch , SearchNameTrait,SearchEmailTrait;

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

    protected $dates = ['deleted_at'];

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
    public static $clientId=5;

    public $tokenName='CustomerService';

    public $guardProviderName='customer_services';
    //----- Need to assign clientId and tokenName class's variables to access customized Passport function -----//


    //----- Token Information  -----//
    public const ACCESS_TOKEN='customer_service_access_token';
    public const REFRESH_TOKEN='customer_service_refresh_token';
    public const API='customer_service_api';
    //----- Token Information  -----//

    protected $dispatchesEvents=[
        'created' => CreatedTransaction::class,
        'updated' => UpdatedTransaction::class,
        'deleted' => DeletedTransaction::class,
        'restored' => RestoredTransaction::class
    ];

}
