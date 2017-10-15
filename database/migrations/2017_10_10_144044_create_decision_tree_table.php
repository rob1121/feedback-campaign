<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDecisionTreeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('decision_tree', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('campaign_id');
            $table->string('question', 80);
            $table->string('option', 45);
            $table->unsignedInteger('branch_1_id');
            $table->unsignedInteger('decision_tree_branch_id');
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
        Schema::table('subscribe_form', function (Blueprint $table) {
            $table->dropForeign('subscribe_form_campaign_id_foreign');
        });
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('decision_tree');
    }
}
