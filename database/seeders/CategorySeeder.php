<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Traits\DataInsertSeeder;

class CategorySeeder extends Seeder
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
            ['name' =>    'Laptop'],
            ['name' =>    'Desktop'],
            ['name' =>    'Accessories'],
            ['name' =>    'Mobile & Tablet'],
            ['name' =>    'Mobile Accessories'],
            ['name' =>    'Gaming Gadgets'],
            ['name' =>    'Software'],
            ['name' =>    'Networking'],
            ['name' =>    'Electronic'],
            ['name' =>    'Office']
        ],'Category','categories');
    }
}
