import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Component from './Choropleth';
import {
    // getAsthmaPrevalence,
    getAsthmaPrevalenceGeoJson,
    getMapCenter,
    getMapZoom,
    getMapBounds,
} from '../../redux/modules/reducer';
import {
    setActiveStateTerritory,
    // setMapCenter,
    // setMapZoom,
    setMapBounds,
    resetMap,
} from '../../redux/modules/ui';

const mapStateToProps = (state) => ({
    // asthmaPrevalence: getAsthmaPrevalence(state),
    asthmaPrevalenceGeoJson: getAsthmaPrevalenceGeoJson(state),
    mapCenter: getMapCenter(state),
    mapZoom: getMapZoom(state),
    mapBounds: getMapBounds(state),
});

const mapDispatchToProps = (dispatch) => ({
    onClickState(e) {
        dispatch(setActiveStateTerritory(e.target.feature.properties.name));
        dispatch(setMapBounds(e.target.getBounds()));
    },
    onSetMapCenter(e) {
        console.log('onSetMapCenter');
        // dispatch(setMapCenter());
    },
    onSetMapZoom(e) {
        console.log('onSetMapZoom');
        // dispatch(setMapZoom());
    },
    onResetMap(e) {
        e.preventDefault();
        dispatch(resetMap());
    },
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component));