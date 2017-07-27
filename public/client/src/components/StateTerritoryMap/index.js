import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Component from './StateTerritoryMap';
import {
    getActiveStateTerritory,
    getStateTerritoryGeoJson,
    getActiveCounty,
} from '../../redux/modules/reducer';
import {
    setActiveCounty,
} from '../../redux/modules/ui';

const mapStateToProps = (state) => ({
    stateTerritoryGeoJson: getStateTerritoryGeoJson(getActiveStateTerritory(state), state),
    activeStateTerritory: getActiveStateTerritory(state),
    activeCounty: getActiveCounty(state),
});

const mapDispatchToProps = (dispatch) => ({
    onClickCounty(e) {
        dispatch(setActiveCounty(e.target.feature.properties.name))
    }
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component));