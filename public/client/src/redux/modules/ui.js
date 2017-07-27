const SET_ACTIVE_STATE_TERRITORY = 'komodo/ui/SET_ACTIVE_STATE_TERRITORY';
const SET_ACTIVE_COUNTY = 'komodo/ui/SET_ACTIVE_COUNTY';
const SET_MAP_CENTER = 'komodo/ui/SET_MAP_CENTER';
const SET_MAP_ZOOM = 'komodo/ui/SET_MAP_ZOOM';
const SET_MAP_BOUNDS = 'komodo/ui/SET_MAP_BOUNDS';
const RESET_MAP = 'komodo/ui/RESET_MAP';

const initialState = {
    activeStateTerritory: false,
    activeCounty: false,
    mapCenter: [37.8, -96],
    mapZoom: 4,
    mapBounds: [[61.39671887310414, -42.97851562500001],[3.5134210456400448, -148.97460937500003]],
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_STATE_TERRITORY:
            return {
                ...state,
                activeStateTerritory: action.payload.stateTerritory,
                activeCounty: initialState.activeCounty,
            };

        case SET_ACTIVE_COUNTY:
            return {
                ...state,
                activeCounty: action.payload.countyName,
            };

        case SET_MAP_CENTER:
            return {
                ...state,
                mapCenter: action.payload.center,
            };

        case SET_MAP_ZOOM:
            return {
                ...state,
                mapZoom: action.payload.level,
            };

        case SET_MAP_BOUNDS:
            return {
                ...state,
                mapBounds: action.payload.bounds,
            };

        case RESET_MAP:
            return {
                ...state,
                mapCenter: initialState.mapCenter,
                mapZoom: initialState.mapZoom,
                mapBounds: initialState.mapBounds,
            };

        default:
            return state;
    }
}

export const getActiveStateTerritory = (state) => state.ui.activeStateTerritory;
export const getActiveCounty = (state) => state.ui.activeCounty;
export const getMapCenter = (state) => state.ui.mapCenter;
export const getMapZoom = (state) => state.ui.mapZoom;
export const getMapBounds = (state) => state.ui.mapBounds;

export const setActiveStateTerritory = (stateTerritory) => ({
    type: SET_ACTIVE_STATE_TERRITORY,
    payload: {
        stateTerritory,
    },
    errors: {},
});

export const setActiveCounty = (countyName) => ({
    type: SET_ACTIVE_COUNTY,
    payload: {
        countyName,
    },
    errors: {}
});

export const setMapCenter = (center) => ({
    type: SET_MAP_CENTER,
    payload: {
        center,
    },
    errors: {},
});

export const setMapZoom = (level) => ({
    type: SET_MAP_ZOOM,
    payload: {
        level,
    },
    errors: {},
});

export const setMapBounds = (bounds) => ({
    type: SET_MAP_BOUNDS,
    payload: {
        bounds,
    },
    errors: {},
});

export const resetMap = () => ({
    type: RESET_MAP,
    payload: {},
    errors: {}
});
