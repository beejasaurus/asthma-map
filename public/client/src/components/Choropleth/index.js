import {connect} from 'react-redux';
import Component from './Choropleth';
import {getAsthmaPrevalence} from '../../redux/modules/reducer';

const mapStateToProps = (state) => ({
    asthmaPrevalence: getAsthmaPrevalence(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);