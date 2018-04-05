import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';

import NewSession from './new_session';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewSession);