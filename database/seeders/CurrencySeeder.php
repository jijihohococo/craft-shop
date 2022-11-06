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
            ['name' => 'USD','main' => FALSE],
            ['name' => 'MMK','main'=> TRUE]
        ],'Currency','currencies');

        $this->insertSeed([
            //------------------USD------------------//
            ['main_currency_id' => 1, 'used_currency_id' => 1 , 'rate' => 1 ],
            //------------------USD------------------//

            //------------------MMK------------------//
            ['main_currency_id' => 2, 'used_currency_id' => 2 , 'rate' => 1 ],
            ['main_currency_id' => 2, 'used_currency_id' => 1 , 'rate' => 3050 ],
            //------------------MMK------------------//
        ],'CurrencyRate','currency_rates');
    }
}
