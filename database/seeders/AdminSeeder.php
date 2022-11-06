<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('admins')->insert([
            'name' => 'Admin' ,
            'email' => 'newadmin@admin.com',
            'password' => \Hash::make('web_asann_tin_2022#')
        ]);
    }
}
