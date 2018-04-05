import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NewSession from './new_session';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewSession);