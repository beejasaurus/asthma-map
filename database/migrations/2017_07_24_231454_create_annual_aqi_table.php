<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAnnualAqiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('annual_aqi', function (Blueprint $table) {
            $table->increments('id');
            $table->string('state_territory')->index('fk_state_territory');
            $table->string('county');
            $table->smallInteger('year')->nullable()->unsigned();
            $table->smallInteger('days_with_aqi')->nullable()->unsigned();
            $table->smallInteger('good_days')->nullable()->unsigned();
            $table->smallInteger('moderate_days')->nullable()->unsigned();
            $table->smallInteger('unhealthy_sensitive_groups_days')->nullable()->unsigned();
            $table->smallInteger('unhealthy_days')->nullable()->unsigned();
            $table->smallInteger('very_unhealthy_days')->nullable()->unsigned();
            $table->smallInteger('hazardous_days')->nullable()->unsigned();
            $table->smallInteger('max_aqi')->nullable()->unsigned();
            $table->smallInteger('90_percent_aqi')->nullable()->unsigned();
            $table->smallInteger('median_aqi')->nullable()->unsigned();
            $table->smallInteger('days_co')->nullable()->unsigned();
            $table->smallInteger('days_no2')->nullable()->unsigned();
            $table->smallInteger('days_ozone')->nullable()->unsigned();
            $table->smallInteger('days_so2')->nullable()->unsigned();
            $table->smallInteger('days_pm25')->nullable()->unsigned();
            $table->smallInteger('days_pm10')->nullable()->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('annual_aqi');
    }
}
