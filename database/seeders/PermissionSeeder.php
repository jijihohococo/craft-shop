<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Permission;
use DB;
use App\Traits\TransactionSeeder;
class PermissionSeeder extends Seeder
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
        foreach(Permission::getModels() as $key => $model){
            DB::table('permissions')
            ->insert([
                'name' => "Grant All Permissions of ".$model,
                'model' => $model ,
                'create' => TRUE ,
                'read' => TRUE ,
                'update' => TRUE ,
                'delete' => in_array($model, Permission::getExceptModels()) ? FALSE : TRUE ,
                'created_at' => NOW() ,
                'updated_at' => NOW()
            ]);
            $this->insertTransaction('Permission',$key+1);
        }
    }
}
