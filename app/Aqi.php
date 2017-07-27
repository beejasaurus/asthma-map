<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Aqi extends Model
{
    protected $table = 'annual_aqi';

    public $timestamps = false;

    public function stateTerritory() {
        return $this->belongsTo('App\StateTerritory','state_territory','state_territory');
    }

    public function countyData() {
        return $this->hasMany('App\County','county_name','county');
//        return $this->hasMany('App\StateTerritory','county_name','county')->join('counties','state_territory.state_territory','=','');
    }

    public function asthmaPrevalence() {
        return $this->hasOne('App\AsthmaPrevalence','state_territory','state_territory');
    }
}
