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
        $class=trim(get_class($event->model),'App\Models\\');
        Transaction::create([
         'guard' =>  UserData::getGuard(),
         'user_id' => UserData::getId(),
         'model' => $class ,
         'model_id' => $event->model->id,
         'action' => $event->action
     ]);
        if(property_exists($event->model,'cacheKey')){
            Cache::tags($event->model::$cacheKey )->flush();
        }
    }
}
