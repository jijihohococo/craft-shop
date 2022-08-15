<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use App\Traits\TransactionSeeder;
class RoleSeeder extends Seeder
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
        DB::table('roles')
        ->insert([
            'name' => 'Super Admin' ,
            'created_at' => NOW() ,
            'updated_at' => NOW()
        ]);
        $this->insertTransaction('Role');
    }
}
