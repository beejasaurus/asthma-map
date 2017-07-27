import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Component from './AqiTable';
import {
    getStateTerritoryAqi,
    getActiveStateTerritory,
    getActiveCounty,
} from '../../redux/modules/reducer';
import {
    setActiveCounty
} from '../../redux/modules/ui';

const mapStateToProps = (state) => ({
    aqi: getStateTerritoryAqi(getActiveStateTerritory(state), state),
    activeCounty: getActiveCounty(state),
});

const mapDispatchToProps = (dispatch) => ({
    onClickRow(county) {
        dispatch(setActiveCounty(county))
    }
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component));