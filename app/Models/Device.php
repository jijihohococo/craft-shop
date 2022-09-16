<?php

namespace App\Models;

class Device
{
    public const AVAILABLE_DEVICES=[
        'mobile' => ['iPhone','Android'],
        'computer' => ['Windows','Linux x86_64','Macintosh']
    ];

    public static function getUserAgent(){
        return  isset( $_SERVER['HTTP_USER_AGENT'] ) ? $_SERVER['HTTP_USER_AGENT'] : 'Windows OS';
    }
}
