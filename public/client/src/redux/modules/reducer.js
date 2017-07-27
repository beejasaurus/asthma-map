import {combineReducers} from 'redux';
import ui, * as fromUi from './ui';
import asthmaPrevalence, * as fromAsthmaPrevalence from './asthmaPrevalence';
import stateTerritory, * as fromStateTerritory from './stateTerritory';

export default combineReducers({
    ui,
    asthmaPrevalence,
    stateTerritory,
});

export const getActiveStateTerritory = (state) => fromUi.getActiveStateTerritory(state);
export const getActiveCounty = (state) => fromUi.getActiveCounty(state);
export const getMapCenter = (state) => fromUi.getMapCenter(state);
export const getMapZoom = (state) => fromUi.getMapZoom(state);
export const getMapBounds = (state) => fromUi.getMapBounds(state);

export const getAsthmaPrevalence = (state) => fromAsthmaPrevalence.getAsthmaPrevalence(state);
export const getAsthmaPrevalenceDidInvalidate = (state) => fromAsthmaPrevalence.getAsthmaPrevalenceDidInvalidate(state);
export const getAsthmaPrevalenceIsFetching = (state) => fromAsthmaPrevalence.getAsthmaPrevalenceIsFetching(state);
export const getAsthmaPrevalenceStatesTerritories = (state) => fromAsthmaPrevalence.getAsthmaPrevalenceStatesTerritories(state);
export const getAsthmaPrevalenceGeoJson = (state) => fromAsthmaPrevalence.getAsthmaPrevalenceGeoJson(state);
export const getAsthmaPrevalenceByState = (stateTerritory, state) => fromAsthmaPrevalence.getAsthmaPrevalenceByState(stateTerritory, state);

export const getStateTerritoryDidInvalidate = (state) => fromStateTerritory.getStateTerritoryDidInvalidate(state);
export const getStateTerritoryIsFetching = (state) => fromStateTerritory.getStateTerritoryIsFetching(state);
export const getStateTerritory = (state) => fromStateTerritory.getStateTerritory(state);
export const getStateTerritoryStatesTerritories = (state) => fromStateTerritory.getStateTerritoryStatesTerritories(state);
export const getStateTerritoryAqi = (stateTerritory, state) => fromStateTerritory.getStateTerritoryAqi(stateTerritory, state);
export const getStateTerritoryGeoJson = (stateTerritory, state) => fromStateTerritory.getStateTerritoryGeoJson(stateTerritory, state);