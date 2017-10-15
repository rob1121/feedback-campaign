<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRatingScaleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rating_scale', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('campaign_id');
            $table->string('rating_scale_type');
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
        Schema::table('rating_scale', function (Blueprint $table) {
            $table->dropForeign('rating_scale_campaign_id_foreign');
        });
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('rating_scale');
    }
}
