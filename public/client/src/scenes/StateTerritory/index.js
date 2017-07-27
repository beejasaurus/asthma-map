import {connect} from 'react-redux';
import Component from './StateTerritory';
import {
    getActiveStateTerritory,
} from '../../redux/modules/reducer';
import {
    setActiveStateTerritory,
} from '../../redux/modules/ui';
import {
    fetchStateTerritoryIfNeeded,
} from '../../redux/modules/stateTerritory';

const mapStateToProps = (state) => ({
    activeStateTerritory: getActiveStateTerritory(state),
});

const mapDispatchToProps = (dispatch) => ({
    fetchStateTerritoryAqi(stateTerritory) {
        dispatch(fetchStateTerritoryIfNeeded(stateTerritory, '?include_aqi=Y'));
    },
    fetchStateTerritoryGeoJson(stateTerritory) {
        dispatch(fetchStateTerritoryIfNeeded(stateTerritory, '?output=GeoJSON'));
    },
    setActiveStateTerritory(stateTerritory) {
        dispatch(setActiveStateTerritory(stateTerritory));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);