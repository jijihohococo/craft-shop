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
        foreach(Permission::getModels() as $key => $model){
            DB::table('permissions')
            ->insert([
                'name' => "Grant All Permissions of ".$model,
                'model' => $model ,
                'create' => TRUE ,
                'read' => TRUE ,
                'update' => TRUE ,
                'delete' => TRUE
            ]);
                DB::table('transactions')
                ->insert([
                    'guard' => 'admin_api',
                    'user_id' => 1,
                    'model' => 'Permission',
                    'model_id' => $key + 1 ,
                    'action' => 'create'
                ]);
        }
    }
}
