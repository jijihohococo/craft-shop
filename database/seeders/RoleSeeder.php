<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
class RoleSeeder extends Seeder
{
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
            'name' => 'Super Admin'
        ]);
        DB::table('transactions')
        ->insert([
            'guard' => 'admin_api',
            'user_id' => 1,
            'model' => 'Role',
            'model_id' => 1 ,
            'action' => 'create'
        ]);
    }
}
