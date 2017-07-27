<?php

namespace App\Http\Controllers;

use App\StateTerritory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class StateTerritoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $includeAsthma = $request->get('include_asthma') === 'Y';
        $stateTerritories = StateTerritory::all();

        if ($includeAsthma) {
            $stateTerritories->load('asthmaPrevalence');
        }

        return $stateTerritories;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\StateTerritory $stateTerritory
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $state)
    {
        $output = $request->get('output');
        $includeAsthma = $request->get('include_asthma') === 'Y';
        $includeAqi = $request->get('include_aqi') === 'Y';

        $stateTerritory = StateTerritory::where('state_territory', $state)->first();

        if ($output === 'GeoJSON') {
            $stateTerritory->load('asthmaPrevalence', 'aqi.countyData');

            $features = [[
                'type' => 'Feature',
                'id' => $stateTerritory->id,
                'properties' => [
                    'name' => $stateTerritory->state_territory,
                    'density' => $stateTerritory->asthmaPrevalence->current_asthma,
                ],
                'geometry' => [
                    'type' => $stateTerritory->geometry_type,
                    'coordinates' => json_decode($stateTerritory->coordinates),
                ]
            ]];

            foreach ($stateTerritory->aqi as $data) {
                $county = $data->countyData ? $data->countyData->where('state_long', $state)->first() : false;
                if ($county) {

                    array_push($features, [
                        'type' => 'Feature',
                        'id' => $data->id,
                        'properties' => [
                            'name' => $data->county,
                            'days_with_aqi' => $data->days_with_aqi,
                            'unhealthy_days' => $data->unhealthy_days,
                        ],
                        'geometry' => [
                            'type' => 'Point',
                            'coordinates' => [
                                (float)$county->longitude,
                                (float)$county->latitude,
                            ],
                        ],
                    ]);
                }
            }

            return response()->json([
                'type' => 'FeatureCollection',
                'features' => $features,
            ]);
        }


        if ($includeAsthma) {
            $stateTerritory->load('asthmaPrevalence');
        }

        if ($includeAqi) {
            $stateTerritory->load('aqi');
        }

        return $stateTerritory;
    }
}
