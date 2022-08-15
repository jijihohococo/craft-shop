<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use App\Traits\TransactionSeeder;
class CurrencySeeder extends Seeder
{

    use TransactionSeeder;
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
            'price' => 2050 ,
            'created_at' => NOW() ,
            'updated_at' => NOW()
        ]);
        $this->insertTransaction('Currency');
    }
}
