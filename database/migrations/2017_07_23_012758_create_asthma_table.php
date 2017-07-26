<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAsthmaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('asthma_prevalence', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('year');
            $table->string('state_territory'); // ->index('fk_state_territory');
            $table->integer('current_asthma')->nullable();
            $table->decimal('percent_asthma', 5, 2)->nullable();
            $table->smallInteger('deaths')->nullable()->unsigned();
            $table->decimal('death_rate_per_million', 5, 2)->nullable()->unsigned();
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
        Schema::dropIfExists('asthma_prevalence');
    }
}
