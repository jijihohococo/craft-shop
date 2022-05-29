<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\{UserDataTrait,ItemDataTrait};
class WishList extends Model
{
    use HasFactory,UserDataTrait,ItemDataTrait;

    protected $fillable=[
        'user_id',
        'item_id'];
}
