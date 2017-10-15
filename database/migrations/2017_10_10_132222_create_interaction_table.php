<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInteractionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('interaction', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('campaign_id');
            $table->string('action');
            $table->string('device_targeting');
            $table->unsignedInteger('percentage_targeting');
            $table->string('browser_targeting');
            $table->string('referer_targeting');
            $table->string('automation');
            $table->boolean('capture_details');
            $table->string('completion_action');
            $table->string('tracking');
            $table->timestamps();
            $table->foreign('campaign_id')
            ->references('id')->on('users')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::enableForeignKeyConstraints();
        Schema::table('interaction', function (Blueprint $table) {
            $table->dropForeign('interaction_campaign_id_foreign');
        });
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('interaction');
    }
}
