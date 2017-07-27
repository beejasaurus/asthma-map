<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCoordinatesToStateTerritoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('state_territory', function (Blueprint $table) {
            $table->string('geometry_type')->nullable();
            $table->text('coordinates')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('state_territory', function (Blueprint $table) {
            $table->dropColumn('geometry_type');
            $table->dropColumn('coordinates');
        });
    }
}
