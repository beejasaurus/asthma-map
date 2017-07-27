const INVALIDATE_STATE_TERRITORY = 'komodo/stateTerritory/INVALIDATE_STATE_TERRITORY';
const REQUEST_STATE_TERRITORY = 'komodo/stateTerritory/REQUEST_STATE_TERRITORY';
const RECEIVE_STATE_TERRITORY = 'komodo/stateTerritory/RECEIVE_STATE_TERRITORY';
const RECEIVE_STATE_TERRITORY_GEOJSON = 'komodo/stateTerritory/RECEIVE_STATE_TERRITORY_GEOJSON';

function stateTerritory(state = {stateTerritory: '', data: {}}, action) {
    switch (action.type) {
        case RECEIVE_STATE_TERRITORY:
        case RECEIVE_STATE_TERRITORY_GEOJSON:
            return {
                ...state,
                stateTerritory: action.payload.stateTerritory,
                data: action.payload.json
            };

        default:
            return state;
    }
}

export const initialState = {
    isFetching: false,
    didInvalidate: false,
    data: [],
    geoJson: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INVALIDATE_STATE_TERRITORY:
            return {
                ...state,
                didInvalidate: true,
                results: [],
            };

        case REQUEST_STATE_TERRITORY:
            return {
                ...state,
                isFetching: true,
            };

        case RECEIVE_STATE_TERRITORY:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                data: [
                    ...state.data,
                    new stateTerritory(undefined, action),
                ],
            };

        case RECEIVE_STATE_TERRITORY_GEOJSON:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                geoJson: [
                    ...state.geoJson,
                    new stateTerritory(undefined, action)
                ],
            };

        default:
            return state;
    }
}

export const getStateTerritoryDidInvalidate = (state) => state.stateTerritory.didInvalidate;
export const getStateTerritoryIsFetching = (state) => state.stateTerritory.isFetching;
export const getStateTerritory = (state) => state.stateTerritory.data;
export const getStateTerritoryStatesTerritories = (state) => getStateTerritory(state).map(ap => ap.state_territory);
export const getStateTerritoryAqi = (stateTerritory, state) => {
    const selected = state.stateTerritory.data.filter(st => st.stateTerritory === stateTerritory);

    if(selected.length !== 0) {
        return selected[0].data;
    }

    return false;
};
export const getStateTerritoryGeoJson = (stateTerritory, state) => {
    const selected = state.stateTerritory.geoJson.filter(st => st.stateTerritory === stateTerritory);
    if (selected.length !== 0) {
        return selected[0].data;
    }

    return false;
};

export const invalidateStateTerritory = () => ({
    type: INVALIDATE_STATE_TERRITORY,
    payload: {},
    errors: {},
});

export const requestStateTerritory = (stateTerritory, params) => ({
    type: REQUEST_STATE_TERRITORY,
    payload: {
        stateTerritory,
        params,
    },
    errors: {},
});

export const receiveStateTerritory = (stateTerritory, json) => ({
    type: RECEIVE_STATE_TERRITORY,
    payload: {
        stateTerritory,
        json,
    },
    errors: {},
});

export const receiveStateTerritoryGeoJson = (stateTerritory, json) => ({
    type: RECEIVE_STATE_TERRITORY_GEOJSON,
    payload: {
        stateTerritory,
        json,
    },
    errors: {},
});

const fetchStateTerritory = (stateTerritory, params) => dispatch => {
    dispatch(requestStateTerritory(stateTerritory, params));

    let queryString = '';
    if (params) {
        queryString += params;
    }

    return fetch('/api/state_territory/' + stateTerritory + queryString)
        .then(response => response.json())
        .then(json => {
            if (params === '?output=GeoJSON') {
                return dispatch(receiveStateTerritoryGeoJson(stateTerritory, json));
            }

            return dispatch(receiveStateTerritory(stateTerritory, json));
        })
        .catch(error => console.error(error));
};

const shouldFetchStateTerritory = (stateTerritory, state) => true;

export const fetchStateTerritoryIfNeeded = (stateTerritory, params) => (dispatch, getState) => {
    if (shouldFetchStateTerritory(stateTerritory, getState())) {
        return dispatch(fetchStateTerritory(stateTerritory, params));
    }
};
