<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Traits\{HasApi,SearchNameTrait,SearchEmailTrait,CreateAndUpdateSearch};

abstract class Authenticated extends Authenticatable
{
    use HasApi, HasFactory, Notifiable , SearchNameTrait , SearchEmailTrait,CreateAndUpdateSearch;
}
