<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignKeysToAsthmaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
//        Schema::table('asthma_prevalence', function (Blueprint $table) {
//            $table->foreign('state_territory')->references('state_territory')->on('state_territory');
//        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
//        Schema::table('asthma_prevalence', function (Blueprint $table) {
//            $table->dropForeign('fk_state_territory');
//        });
    }
}
