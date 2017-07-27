<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class County extends Model
{
    protected $table = 'counties';

    public $timestamps = false;

    public function scopeState($query, $stateTerritory) {
        return $query->where('state_long', $stateTerritory);
    }
}
