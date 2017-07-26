<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AsthmaPrevalenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('asthma_prevalence')->insert([
            [
                'year' => 2014,
                'state_territory' => 'Alabama',
                'current_asthma' => 353847,
                'percent_asthma' => 9.50,
            ],
        ]);
    }
}
