<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCampaignTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('campaigns', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->string('title');
            $table->string('size');
            $table->string('type');
            $table->boolean('has_follow_up_question');
            $table->string('follow_up_question', 80);
            $table->string('submit_button_text', 30);
            $table->timestamps();
            $table->foreign('user_id')
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
        Schema::table('campaigns', function (Blueprint $table) {
            $table->dropForeign('campaigns_user_id_foreign');
        });
        Schema::disableForeignKeyConstraints();

        Schema::dropIfExists('campaigns');
    }
}
