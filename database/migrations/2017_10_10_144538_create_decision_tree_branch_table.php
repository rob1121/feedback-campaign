<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDecisionTreeBranchTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('decision_tree_branch', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('decision_tree_id');
            $table->string('action');
            $table->string('value');
            $table->timestamps();
            $table->foreign('decision_tree_id')
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
        Schema::table('decision_tree_branch', function (Blueprint $table) {
            $table->dropForeign('decision_tree_branch_decision_tree_id_foreign');
        });
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('decision_tree_branch');
    }
}
