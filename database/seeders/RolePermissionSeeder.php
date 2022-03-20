<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Permission;
use DB;
class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        foreach(Permission::getModels() as $key => $model){
            DB::table('role_permissions')
            ->insert([
                'role_id' => 1,
                'permission_id' => $key + 1

            ]);
        }
    }
}
