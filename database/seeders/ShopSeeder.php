<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use App\Traits\TransactionSeeder;
class ShopSeeder extends Seeder
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
        DB::table('shops')->insert([
            'name' => 'Craft Shop' ,
            'phone' => '+ 457 789 789 65',
            'email' => 'craft@shop.com',
            'address' => '123 Street, Old Trafford, NewYork, USA',
            'pic' => 'logo_dark.png'
        ]);
        DB::table('seos')->insert([
            'title' => 'Craft Shop - Electronic Store',
            'description' => '-',
            'type' => 'Online Store',
            'model' => 'Shop',
            'model_id' => 1
        ]);
        $this->insertTransaction('Shop');
    }
}
