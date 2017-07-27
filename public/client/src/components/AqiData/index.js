import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Component from './AqiData';
import {
    getStateTerritoryAqi,
    getActiveStateTerritory,
} from '../../redux/modules/reducer';

const mapStateToProps = (state) => ({
    aqi: getStateTerritoryAqi(getActiveStateTerritory(state), state),
});

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component));