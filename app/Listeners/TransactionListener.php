<?php

namespace App\Listeners;


use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\{Transaction,UserData};
use Illuminate\Support\Facades\Cache;
class TransactionListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\CreatedTransaction  $event
     * @return void
     */
    public function handle($event)
    {
        $model=$event->model::$content;

        $cachedModels=[
            'Attribute',
            'Category',
            'Brand',
            'Banner',
            'Currency',
            'Role',
            'Permission',
            'Tax',
            'Color'
        ];
        Transaction::create([
         'guard' =>  UserData::getGuard(),
         'user_id' => UserData::getId(),
         'model' => $model ,
         'model_id' => $event->model->id,
         'action' => $event->action
     ]);
        if(in_array( $model , $cachedModels)){
            Cache::tags($event->model::$cacheKey )->flush();
        }
    }
}
