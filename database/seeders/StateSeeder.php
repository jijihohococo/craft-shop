<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Traits\DataInsertSeeder;

class StateSeeder extends Seeder
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
            //------------MYANMAR------------//
            ['name' => 'Yangon','country_id' => 1],
            ['name' => 'Mandalay','country_id' => 1],
            ['name' => 'Ayeyarwady','country_id' => 1],
            ['name' => 'Kachin','country_id' => 1],
            ['name' => 'Kayah','country_id' => 1],
            ['name' => 'Bago East Division','country_id' => 1],
            ['name' => 'Bago West Division','country_id' => 1],
            ['name' => 'Tanintharyi','country_id' => 1],
            ['name' => 'Chin','country_id' => 1],
            ['name' => 'Magway','country_id' => 1],
            ['name' => 'Kayin','country_id' => 1],
            ['name' => 'Mon','country_id' => 1],
            ['name' => 'Rakhine','country_id' => 1],
            ['name' => 'Sagaing','country_id' => 1],
            ['name' => 'Shan State(East)','country_id' => 1],
            ['name' => 'Shan State(North)','country_id' => 1],
            ['name' => 'Shan State(South)','country_id' => 1],
            //------------MYANMAR------------//
        ],'State','states');
    }
}
