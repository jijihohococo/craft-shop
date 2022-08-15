<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Traits\{HasApi,CreateAndUpdateSearch,DeleteSearch};
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Events\{CreatedTransaction,UpdatedTransaction,DeletedTransaction,RestoredTransaction};
class Admin extends Authenticatable
{
    use HasApi, HasFactory, Notifiable , SoftDeletes , CreateAndUpdateSearch , DeleteSearch;

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
    public static $clientId=1;

    public $tokenName='Admin';

    public $guardProviderName='admins';
    //----- Need to assign clientId and tokenName class's variables to access customized Passport function -----//

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
