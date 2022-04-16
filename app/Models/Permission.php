<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
class Permission extends TransactionModel
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'name',
        'model',
        'create',
        'read',
        'update',
        'delete'];

    public static function getModels(){
        return [
            Admin::$content,
            Banner::$content,
            Category::$content,
            Item::$content,
            self::$content,
            Role::$content,
            Target::$content,
            User::$content,
            Currency::$content,
            Tax::$content
        ];
    }

    public static function getActions(){
        return [
            'create',
            'read',
            'update',
            'delete'
        ];
    }

    public static $content="Permission";
}
