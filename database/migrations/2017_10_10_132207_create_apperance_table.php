<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateApperanceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apperance', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('campaign_id');
            $table->string('screen_position');
            $table->string('feedback_tab');
            $table->string('header');
            $table->string('body');
            $table->string('buttons');
            $table->string('header_text');
            $table->string('body_text');
            $table->string('input_text');
            $table->string('button_text');
            $table->string('white_labelling');
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
        Schema::table('apperance', function (Blueprint $table) {
            $table->dropForeign('apperance_campaign_id_foreign');
        });
        Schema::disableForeignKeyConstraints();

        Schema::dropIfExists('apperance');
    }
}
