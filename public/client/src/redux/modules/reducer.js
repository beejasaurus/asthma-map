import {combineReducers} from 'redux';
// import statesTerritories, * as fromStatesTerritories from './statesTerritories';
import ui from './ui';
import asthmaPrevalence, * as fromAsthmaPrevalence from './asthmaPrevalence';

export default combineReducers({
    ui,
    asthmaPrevalence,
});

export const getAsthmaPrevalence = (state) => fromAsthmaPrevalence.getAsthmaPrevalence(state);
export const getAsthmaPrevalenceDidInvalidate = (state) => fromAsthmaPrevalence.getAsthmaPrevalenceDidInvalidate(state);
export const getAsthmaPrevalenceIsFetching = (state) => fromAsthmaPrevalence.getAsthmaPrevalenceIsFetching(state);
export const getAsthmaPrevalenceStatesTerritories = (state) => fromAsthmaPrevalence.getAsthmaPrevalenceStatesTerritories(state);
