<?php

namespace App\Http\Controllers;

use App\Aqi;
use App\AsthmaPrevalence;
use App\County;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use League\Csv\Reader;

class CsvImportController extends Controller
{
    public function getAsthmaData() {
        if(!ini_get('auto_detect_line_endings')) {
            ini_set('auto_detect_line_endings', 1);
        }

        $csv = Reader::createFromPath(public_path() . '/data/combined_asthma_2014.csv');
        $csv->setOffset(1);
        $csv->each(function($row) {
            $asthma = new AsthmaPrevalence();
            $asthma->year = $row[0];
            $asthma->state_territory = $row[1];
            $asthma->current_asthma = $row[2];
            $asthma->percent_asthma = $row[3];
            $asthma->deaths = $row[4];
            $asthma->death_rate_per_million = $row[5];
            $asthma->save();

            return true;
        });

        return AsthmaPrevalence::all();
    }

    public function getAqiData() {
        if(!ini_get('auto_detect_line_endings')) {
            ini_set('auto_detect_line_endings', 1);
        }

        $csv = Reader::createFromPath(public_path() . '/data/annual_aqi_by_county_2014.csv');
        $csv->setOffset(1);
        $csv->each(function($row) {

            $aqi = new Aqi();
            $aqi->state_territory = $row[0];
            $aqi->county = $row[1];
            $aqi->year = $row[2];
            $aqi->days_with_aqi = $row[3];
            $aqi->good_days = $row[4];
            $aqi->moderate_days = $row[5];
            $aqi->unhealthy_sensitive_groups_days = $row[6];
            $aqi->unhealthy_days = $row[7];
            $aqi->very_unhealthy_days = $row[8];
            $aqi->hazardous_days = $row[9];
            $aqi->max_aqi = $row[10];
//            $aqi['90_percent_aqi'] = $row[11];
            $aqi->median_aqi = $row[12];
            $aqi->days_co = $row[13];
            $aqi->days_no2 = $row[14];
            $aqi->days_ozone = $row[15];
            $aqi->days_so2 = $row[16];
            $aqi->days_pm25 = $row[17];
            $aqi->days_pm10 = $row[18];

            $aqi->save();

            return true;
        });

        return Aqi::all();
    }

//    public function geocodeFips() {
//
//    }

    public function importCounties() {
        if(!ini_get('auto_detect_line_endings')) {
            ini_set('auto_detect_line_endings', 1);
        }

        $csv = Reader::createFromPath(public_path() . '/data/fips_coords_complete.csv');
        $csv->setOffset(1);
        $csv->each(function($row) {
            $county = new County();
            $county->state_long = $row[0];
            $county->state_abbv = $row[1];
            $county->fips = $row[2];
            $county->state_fips = $row[3];
            $county->county_fips = $row[4];
            $county->county_name = $row[5];
            $county->latitude = $row[7];
            $county->longitude = $row[8];
            $county->save();

            return true;
        });

        return County::all();
    }
}
