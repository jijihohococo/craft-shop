<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemPricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_prices', function (Blueprint $table) {
            $table->id();
            $table->integer('currency_id');
            $table->integer('item_variant_id');
            $table->decimal('price', 13, 4);
            $table->string('promotion_type')->nullable();
            $table->decimal('promotion_price',13,4)->nullable();
            $table->string('promotion_start_time')->nullable();
            $table->string('promotion_end_time')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item_prices');
    }
}
