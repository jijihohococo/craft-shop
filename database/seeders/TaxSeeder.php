<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use App\Traits\TransactionSeeder;
class TaxSeeder extends Seeder
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
        DB::table('taxes')->insert([
            'name' => 'Commercial Tax',
            'rate' => 5
        ]);
        $this->insertTransaction('Tax');
    }
}
