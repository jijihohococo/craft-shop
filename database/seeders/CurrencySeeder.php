<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Traits\DataInsertSeeder;
class CurrencySeeder extends Seeder
{

    use DataInsertSeeder;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->insertSeed([
            ['name' => 'USD','price' => 2050],
            ['name' => 'MMK','price'=> 1]
        ],'Currency','currencies');
    }
}
