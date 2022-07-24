<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class ShopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('shops')->insert([
            'name' => 'Craft - Shop' ,
            'phone' => '+ 457 789 789 65',
            'email' => 'craft@shop.com',
            'address' => '123 Street, Old Trafford, NewYork, USA',
            'pic' => 'logo_dark.png'
        ]);

        DB::table('transactions')
        ->insert([
            'guard' => 'admin_api',
            'user_id' => 1,
            'model' => 'Shop',
            'model_id' => 1 ,
            'action' => 'create'
        ]);
    }
}
