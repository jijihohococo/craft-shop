<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Traits\DataInsertSeeder;

class CitySeeder extends Seeder
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
        $yangon=1;
        $mmk=2;
        $mm=1;
        $this->insertSeed([
            //--------------------YANGON STATE--------------------//
            ['name' => 'Ahlone' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Bahan' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Shwegondaing' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Botahtaung' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Insein' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Hlaing' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Aung San' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Dagon' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Pazundaung' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Mingalartaungnyunt' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Dawbon' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Hlaingtharya' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Dagon Myothit East' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Dagon Myothit North' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Dagon Myothit Seikkan' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => '7/8 Junction' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Mayangone' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Latha' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Lanmadaw' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Kamaryut' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Mingaladon' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Pearl' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'Thuwanna' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'South Okkalapa' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

            ['name' => 'North Okkalapa' , 'state_id' => $yangon ,
            'country_id' => $mm ,
             'currency_id' => $mmk ,'delivery_price' => 2500 ],

        ],
        'City','cities');
    }
}
