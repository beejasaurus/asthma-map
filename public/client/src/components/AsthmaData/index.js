import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Component from './AsthmaData';
import {
    // getAsthmaPrevalence,
    getActiveStateTerritory,
    getAsthmaPrevalenceByState,
} from '../../redux/modules/reducer';
// import {} from '../../redux/modules/ui';

const mapStateToProps = (state) => ({
    asthmaPrevalence: getAsthmaPrevalenceByState(getActiveStateTerritory(state), state),
});

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component));