<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemCollection extends Model
{
    use HasFactory;

    protected $fillable = [
        'collection_id',
        'item_id'];
}
