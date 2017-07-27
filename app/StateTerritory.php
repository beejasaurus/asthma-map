<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StateTerritory extends Model
{
    protected $table = 'state_territory';

    protected $fillable = [
        'state_territory',
        'geometry_type',
        'coordinates',
    ];

    public $timestamps = false;

    public function asthmaPrevalence() {
        return $this->hasOne('App\AsthmaPrevalence','state_territory','state_territory');
    }

    public function aqi() {
        return $this->hasMany('App\Aqi','state_territory','state_territory');
    }

    public function countyData() {
        return $this->hasMany('App\County','state_long','state_territory');
    }
}
