<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Traits\DataInsertSeeder;

class CategorySeeder extends Seeder
{
    use DataInsertSeeder;

    protected $mainColumn='name';
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
            ['name' => 'Desktop Components' ],
            ['name' =>    'Software'],
            ['name' =>    'Networking Components'],
            ['name' =>    'Electronic'],
            ['name' =>    'Office']
        ],'Category','categories');
    }
}
