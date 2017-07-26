<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StateTerritorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('state_territory')->insert([
            ['state_territory' => 'Alabama'],
            ['state_territory' => 'Alaska'],
            ['state_territory' => 'Arizona'],
            ['state_territory' => 'California'],
            ['state_territory' => 'Connecticut'],
            ['state_territory' => 'Delaware']
        ]);
    }
}
