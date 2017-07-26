<?php

namespace App\Http\Controllers;

use App\StateTerritory;
use Illuminate\Http\Request;

class StateTerritoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return StateTerritory::all();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\StateTerritory  $stateTerritory
     * @return \Illuminate\Http\Response
     */
    public function show(StateTerritoryController $stateTerritory)
    {
        return $stateTerritory;
    }
}
