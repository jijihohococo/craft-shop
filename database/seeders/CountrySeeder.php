<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Traits\DataInsertSeeder;

class CountrySeeder extends Seeder
{
    use DataInsertSeeder;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $this->insertSeed([
            ['name' =>    'Myanmar' , 'code' => 'mm']
        ],'Country','countries');
    }
}
