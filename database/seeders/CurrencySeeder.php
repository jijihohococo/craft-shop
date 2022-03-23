<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('currencies')->insert([
            'name' => 'USD',
            'price' => 2050
        ]);
        DB::table('transactions')
        ->insert([
            'guard' => 'admin_api',
            'user_id' => 1,
            'model' => 'Currency',
            'model_id' => 1 ,
            'action' => 'create'
        ]);
    }
}
