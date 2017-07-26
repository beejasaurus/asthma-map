<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('import_asthma','CsvImportController@getAsthmaData');
Route::get('import_aqi','CsvImportController@getAqiData');
//Route::get('geocode_fips','CsvImportController@geocodeFips');
Route::get('import_counties','CsvImportController@importCounties');

Route::get('/', function () {
    return view('welcome');
});
