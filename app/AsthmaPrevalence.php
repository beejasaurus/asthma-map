<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AsthmaPrevalence extends Model
{
    protected $table = 'asthma_prevalence';

    public function stateTerritory() {
        return $this->hasOne('App\StateTerritory','state_territory','state_territory');
    }
}
