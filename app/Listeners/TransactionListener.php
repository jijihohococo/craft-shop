<?php

namespace App\Listeners;


use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\{Transaction,UserData};

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
       Transaction::create([
           'guard' =>  UserData::getGuard(),
           'user_id' => UserData::getId(),
           'model' => $event->model::$content ,
           'model_id' => $event->model->id,
           'action' => $event->action
       ]);
   }
}
