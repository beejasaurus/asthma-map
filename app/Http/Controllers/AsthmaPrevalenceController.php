<?php

namespace App\Http\Controllers;

use App\AsthmaPrevalence;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AsthmaPrevalenceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $output = $request->get('output');
        $stateTerritory = $request->get('state_territory');
        $year = $request->get('year');

        $asthmaPrevalence = AsthmaPrevalence::when($stateTerritory, function ($query) use ($stateTerritory) {
            return $query->where('state_territory', $stateTerritory);
        })->when($year, function ($query) use ($year) {
            return $query->where('year', $year);
        })->get();

        if ($output === 'GeoJSON') {

            $asthmaPrevalence->load('stateTerritory');

            $features = [];
            foreach ($asthmaPrevalence as $data) {
                if ($data->stateTerritory) {
                    array_push($features, [
                        'type' => 'Feature',
                        'id' => $data->id,
                        'properties' => [
                            'name' => $data->state_territory,
                            'density' => $data->current_asthma,
                        ],
                        'geometry' => [
                            'type' => $data->stateTerritory->geometry_type,
                            'coordinates' => json_decode($data->stateTerritory->coordinates),
                        ]
                    ]);
                }
            }

            return response()->json([
                'type' => 'FeatureCollection',
                'features' => $features,
            ]);
        }

        return $asthmaPrevalence;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AsthmaPrevalence $asthmaPrevalence
     * @return \Illuminate\Http\Response
     */
    public function show(AsthmaPrevalence $asthmaPrevalence)
    {
        return $asthmaPrevalence;
    }
}
