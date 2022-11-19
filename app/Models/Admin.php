<?php

namespace App\Models;

use App\Traits\DeleteSearch;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Events\{CreatedTransaction,UpdatedTransaction,DeletedTransaction,RestoredTransaction};
class Admin extends Authenticated
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
    public static $clientId=3;

    public $tokenName='Admin';

    public $guardProviderName='admins';
    //----- Need to assign clientId and tokenName class's variables to access customized Passport function -----//


    //----- Token Information  -----//
    public const ACCESS_TOKEN='admin_access_token';
    public const REFRESH_TOKEN='admin_refresh_token';
    public const API='admin_api';
    //----- Token Information  -----//

    protected $dispatchesEvents=[
        'created' => CreatedTransaction::class,
        'updated' => UpdatedTransaction::class,
        'deleted' => DeletedTransaction::class,
        'restored' => RestoredTransaction::class
    ];

    public function roles(){
        return $this->hasMany('App\Models\AdminRole');
    }
}
