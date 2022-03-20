<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Permission;
use DB;
class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        foreach(Permission::getModels() as $model){
            DB::table('permissions')
            ->insert([
                'name' => "Grant All Permissions of ".$model,
                'model' => $model ,
                'create' => TRUE ,
                'read' => TRUE ,
                'update' => TRUE ,
                'delete' => TRUE
            ]);
        }
    }
}
