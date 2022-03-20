<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PassportDate extends Model
{
    use HasFactory;

    public const ACCESS_TOKEN_EXPIRE_DAY=15;

    public const REFRESH_TOKEN_EXPIRE_DAY=30;
}
