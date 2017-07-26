<?php

namespace App\Http\Controllers;

use App\County;
use Illuminate\Http\Request;

class CountyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $stateLong = $request->get('state_long');
        $stateAbbv = $request->get('state_abbv');
        $countyName = $request->get('county_name');
        $fips = $request->get('fips');

        return County::when($stateLong, function ($query) use ($stateLong) {
                return $query->where('state_long', $stateLong);
            })
            ->when($stateAbbv, function ($query) use ($stateAbbv) {
                return $query->where('state_abbv',$stateAbbv);
            })
            ->when($fips, function ($query) use ($fips) {
                return $query->where('fips', $fips);
            })
            ->when($countyName, function ($query) use ($countyName) {
                return $query->where('county_name', $countyName);
            })
            ->get();

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\County $county
     * @return \Illuminate\Http\Response
     */
    public function show(County $county)
    {

        return $county;
    }
}
