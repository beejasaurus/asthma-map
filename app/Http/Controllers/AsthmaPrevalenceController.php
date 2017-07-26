<?php

namespace App\Http\Controllers;

use App\AsthmaPrevalence;
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
        $stateTerritory = $request->get('state_territory');
        $year = $request->get('year');

        return AsthmaPrevalence::when($stateTerritory, function ($query) use ($stateTerritory) {
            return $query->where('state_territory',$stateTerritory);
        })->when('year', function ($query) use ($year) {
            return $query->where('year', $year);
        })->get();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AsthmaPrevalence  $asthmaPrevalence
     * @return \Illuminate\Http\Response
     */
    public function show(AsthmaPrevalence $asthmaPrevalence)
    {
        return $asthmaPrevalence;
    }
}
