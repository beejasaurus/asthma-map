import {connect} from 'react-redux';
import Component from './Routes';
import {getAsthmaPrevalenceStatesTerritories} from '../redux/modules/reducer';

const mapStateToProps = (state) => ({
    statesTerritories: getAsthmaPrevalenceStatesTerritories(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);