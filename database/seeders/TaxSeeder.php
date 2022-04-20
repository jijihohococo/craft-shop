<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
class TaxSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('taxes')->insert([
            'name' => 'Commercial Tax',
            'rate' => 5
        ]);

        DB::table('transactions')
        ->insert([
            'guard' => 'admin_api',
            'user_id' => 1,
            'model' => 'Tax',
            'model_id' => 1 ,
            'action' => 'create'
        ]);
    }
}
