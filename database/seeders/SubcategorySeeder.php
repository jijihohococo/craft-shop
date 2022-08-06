<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Traits\DataInsertSeeder;

class SubcategorySeeder extends Seeder
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
            // Laptop //
            ['name' => 'Commercial Laptop','category_id' => 1 ],
            ['name' => 'Consumer Laptop','category_id' => 1 ],
            // Laptop //


            // Desktop //
            ['name' => 'Commercial Desktop','category_id' => 2] ,
            ['name' => 'Consumer Desktop','category_id' => 2 ],
            ['name' => 'Server Compupter','category_id' => 2 ],
            ['name' => 'All in One Compupter','category_id' => 2] ,
            // Desktop //

            // Accessories //
            ['name' => 'External HDD','category_id' => 3 ],
            ['name' => 'Cable & Converter','category_id' => 3] ,
            ['name' => 'UPS','category_id' => 3 ],
            ['name' => 'Speaker','category_id' => 3] ,
            ['name' => 'Headphone','category_id' => 3] ,
            ['name' => 'Mouse','category_id' => 3 ],
            ['name' => 'Mouse Pad','category_id' => 3] ,
            ['name' => 'Keyboard' , 'category_id' => 3] ,
            ['name' => 'Projector' , 'category_id' => 3] ,
            ['name' => 'Printer' , 'category_id' => 3] ,
            ['name' => 'Keyboard & Mouse Combo','category_id' => 3] ,
            ['name' => 'IPS' ,'category_id' => 3] ,
            ['name' => 'Backpack' , 'category_id' => 3] ,
            ['name' => 'External DVD Drive' , 'category_id' => 3] ,
            ['name' => 'Peripherals' , 'category_id' => 3] ,
            ['name' => 'Docking' , 'category_id' => 3] ,
            ['name' => 'Casing' , 'category_id' => 3 ],
            ['name' => 'Scanner' , 'category_id' => 3 ],
            ['name' => 'WebCam' , 'category_id' => 3 ],
            ['name' => 'Adapter' , 'category_id' => 3 ],
            ['name' => 'USB HUB' , 'category_id' => 3 ],
            // Accessories //

            // Moble & Tablet //
            ['name' => 'Smartphone' , 'category_id' => 4 ],
            ['name' => 'Keypad Phone' , 'category_id' => 4 ],
            ['name' => 'iPad' , 'category_id' => 4],
            ['name' => 'iPhone' , 'category_id' => 4 ],
            ['name' => 'Wearable Accessories' , 'category_id' => 4],
            // Moble & Tablet //

            // Mobile Accessories //
            ['name' => 'Cover' , 'category_id' => 5 ],
            ['name' => 'Cables' , 'category_id' => 5 ],
            ['name' => 'Earphone' , 'category_id' => 5 ],
            ['name' => 'PowerBank' , 'category_id' => 5 ],
            ['name' => 'Wireless Charging Pad' , 'category_id' => 5],
            ['name' => "Mobile's Peripherals",'category_id' => 5],
            ['name' => "Car's Charger",'category_id'=>5],
            ['name' => "Apple's Watch",'category_id'=>5],
            ['name' => 'Smart Watch','category_id'=>5],
            ['name' => 'Wireless Earphone','category_id'=> 5],
            ['name' => 'Apple Adapter','category_id' => 5] ,
            ['name' => 'Air Pod','category_id'=>5],
            ['name' => 'Apple Pencil','category_id'=>5],
            // Mobile Accessories //

            // Gaming //
            ['name'=>'Gaming Laptop','category_id'=>6],
            ['name'=> 'Gaming Desktop','category_id'=>6],
            ['name'=> 'Gaming Mouse','category_id'=>6],
            ['name'=> 'Gaming Keyboard','category_id'=>6],
            ['name'=> 'Gaming Headphone','category_id'=>6],
            ['name'=> 'Gaming Phone','category_id'=>6],
            ['name'=> 'Gaming Backpack','category_id'=>6],
            ['name'=> 'Gaming Mouse Mat','category_id'=>6],
            ['name'=> 'Gaming Peripherals','category_id'=>6],
            ['name'=> 'Gaming Monitor','category_id'=>6],
            // Gaming //

            // Desktop Components //
            ['name' => 'Monitor' , 'category_id' => 7 ],
            ['name' => 'RAM' , 'category_id' => 7 ],
            ['name' => 'Motherboard','category_id'=>7],
            ['name' => 'HDD','category_id'=>7],
            ['name'=> 'SSD','category_id'=>7],
            ['name' => 'CPU','category_id'=>7],
            ['name' => 'Graphics Card','category_id'=>7]
            // Desktop Components //

            // Software //
            ['name' => 'Learning','category_id'=>8],
            ['name'=>'Anti-Virus','category_id'=>8],
            // Software //

            // Networking Components //
            ['name'=>'Router','category_id'=>9],
            ['name' => 'Switch','category_id'=>9],
            ['name'=> 'Modem','category_id'=>9],
            ['name'=>'Ethernet Adapter','category_id'=>9],
            // Networking Components //
        ],'Subcategory','subcategories');
        
    }
}
