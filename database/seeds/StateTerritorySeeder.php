<?php

use App\StateTerritory;
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
        DB::table('state_territory')->delete();
        $json = File::get('database/data/statesData.json');
        $data = json_decode($json);
        foreach ($data as $obj) {
            StateTerritory::create([
                'state_territory' => $obj->properties->name,
                'geometry_type' => $obj->geometry->type,
                'coordinates' => json_encode($obj->geometry->coordinates),
            ]);
        }
//        DB::table('state_territory')->insert([
//            ['state_territory' => 'Alabama'],
//            ['state_territory' => 'Alaska'],
//            ['state_territory' => 'Arizona'],
//            ['state_territory' => 'Arkansas'],
//            ['state_territory' => 'California'],
//            ['state_territory' => 'Colorado'],
//            ['state_territory' => 'Connecticut'],
//            ['state_territory' => 'Delaware'],
//            ['state_territory' => 'District of Columbia'],
//            ['state_territory' => 'Florida'],
//            ['state_territory' => 'Georgia'],
//            ['state_territory' => 'Hawaii'],
//            ['state_territory' => 'Idaho'],
//            ['state_territory' => 'Illinois'],
//            ['state_territory' => 'Indiana'],
//            ['state_territory' => 'Iowa'],
//            ['state_territory' => 'Kansas'],
//            ['state_territory' => 'Kentucky'],
//            ['state_territory' => 'Louisiana'],
//            ['state_territory' => 'Maine'],
//            ['state_territory' => 'Maryland'],
//            ['state_territory' => 'Massachusetts'],
//            ['state_territory' => 'Michigan'],
//            ['state_territory' => 'Minnesota'],
//            ['state_territory' => 'Mississippi'],
//            ['state_territory' => 'Missouri'],
//            ['state_territory' => 'Montana'],
//            ['state_territory' => 'Nebraska'],
//            ['state_territory' => 'Nevada'],
//            ['state_territory' => 'New Hampshire'],
//            ['state_territory' => 'New Jersey'],
//            ['state_territory' => 'New Mexico'],
//            ['state_territory' => 'New York'],
//            ['state_territory' => 'North Carolina'],
//            ['state_territory' => 'North Dakota'],
//            ['state_territory' => 'Ohio'],
//            ['state_territory' => 'Oklahoma'],
//            ['state_territory' => 'Oregon'],
//            ['state_territory' => 'Pennsylvania'],
//            ['state_territory' => 'Rhode Island'],
//            ['state_territory' => 'South Carolina'],
//            ['state_territory' => 'South Dakota'],
//            ['state_territory' => 'Tennessee'],
//            ['state_territory' => 'Texas'],
//            ['state_territory' => 'Utah'],
//            ['state_territory' => 'Vermont'],
//            ['state_territory' => 'Virginia'],
//            ['state_territory' => 'Washington'],
//            ['state_territory' => 'West Virginia'],
//            ['state_territory' => 'Wisconsin'],
//            ['state_territory' => 'Wyoming'],
//            ['state_territory' => 'Guam'],
//            ['state_territory' => 'Puerto Rico'],
//        ]);

    }
}




















































