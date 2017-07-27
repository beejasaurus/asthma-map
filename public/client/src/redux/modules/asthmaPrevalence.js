// import {convertQueryParameters, makeQueryString} from '../../utilities/urls';

const INVALIDATE_ASTHMA_PREVALENCE = 'komodo/asthmaPrevalence/INVALIDATE_ASTHMA_PREVALENCE';
const REQUEST_ASTHMA_PREVALENCE = 'komodo/asthmaPrevalence/REQUEST_ASTHMA_PREVALENCE';
const RECEIVE_ASTHMA_PREVALENCE = 'komodo/asthmaPrevalence/RECEIVE_ASTHMA_PREVALENCE';
const RECEIVE_ASTHMA_PREVALENCE_GEOJSON = 'komodo/asthmaPrevalence/RECEIVE_ASTHMA_PREVALENCE_GEOJSON';

export const initialState = {
    isFetching: false,
    didInvalidate: false,
    data: [],
    geoJson: false,
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case INVALIDATE_ASTHMA_PREVALENCE:
            return {
                ...state,
                didInvalidate: true,
                results: [],
            };

        case REQUEST_ASTHMA_PREVALENCE:
            return {
                ...state,
                isFetching: true,
            };

        case RECEIVE_ASTHMA_PREVALENCE:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                data: action.payload.json,
            };

        case RECEIVE_ASTHMA_PREVALENCE_GEOJSON:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                geoJson: action.payload.json,
            };

        default:
            return state;
    }
}

export const getAsthmaPrevalenceDidInvalidate = (state) => state.asthmaPrevalence.didInvalidate;
export const getAsthmaPrevalenceIsFetching = (state) => state.asthmaPrevalence.isFetching;
export const getAsthmaPrevalence = (state) => state.asthmaPrevalence.data;
export const getAsthmaPrevalenceStatesTerritories = (state) => getAsthmaPrevalence(state).map(ap => ap.state_territory);
export const getAsthmaPrevalenceGeoJson = (state) => state.asthmaPrevalence.geoJson;
export const getAsthmaPrevalenceByState = (stateTerritory, state) => {
    const selected = getAsthmaPrevalence(state).filter(ap => ap.state_territory === stateTerritory);
    if(selected.length !== 0) {
        return selected[0];
    }

    return false;
}

export const invalidateAsthmaPrevalence = () => ({
    type: INVALIDATE_ASTHMA_PREVALENCE,
    payload: {},
    errors: {},
});

export const requestAsthmaPrevalence = (params) => ({
    type: REQUEST_ASTHMA_PREVALENCE,
    payload: {
        params,
    },
    errors: {},
});

export const receiveAsthmaPrevalence = (json) => ({
    type: RECEIVE_ASTHMA_PREVALENCE,
    payload: {
        json,
    },
    errors: {},
});

export const receiveAsthmaPrevalenceGeoJson = (json) => ({
    type: RECEIVE_ASTHMA_PREVALENCE_GEOJSON,
    payload: {
        json,
    },
    errors: {},
});

const fetchAsthmaPrevalence = params => dispatch => {
    dispatch(requestAsthmaPrevalence(params));

    let queryString = '';
    if(params) {
        queryString += params;
    }

    return fetch('/api/asthma_prevalence' + queryString)
        .then(response => response.json())
        .then(json => {
            if(params === '?output=GeoJSON') {
                return dispatch(receiveAsthmaPrevalenceGeoJson(json));
            }

            return dispatch(receiveAsthmaPrevalence(json));
        })
        .catch(error => console.error(error));
};

const shouldFetchAsthmaPrevalence = (dispatch, state) => true;

export const fetchAsthmaPrevalenceIfNeeded = (params) => (dispatch, getState) => {
    if (shouldFetchAsthmaPrevalence(dispatch, getState())) {
        return dispatch(fetchAsthmaPrevalence(params));
    }
};
