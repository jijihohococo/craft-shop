<?php

namespace App\Models;

use App\Traits\DeleteSearch;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Events\{CreatedTransaction,UpdatedTransaction,DeletedTransaction,RestoredTransaction};
class CustomerService extends Authenticated
{
    use SoftDeletes , DeleteSearch;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'pic',
        'chat_available'
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
