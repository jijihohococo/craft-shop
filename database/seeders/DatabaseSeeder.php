<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::beginTransaction();
        $this->call([
            AdminSeeder::class ,
            PermissionSeeder::class,
            RoleSeeder::class ,
            AdminRoleSeeder::class,
            RolePermissionSeeder::class,
            CurrencySeeder::class ,
            ColorSeeder::class
        ]);
        DB::commit();
        // \App\Models\User::factory(10)->create();
    }
}
