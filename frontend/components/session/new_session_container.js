import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';

import NewSession from './new_session';

import { fetchSongThenPlay } from '../../actions/audio_actions';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    loginDemoUser: () => dispatch(login({
        username: 'Demo User',
        email: 'demo@demo.com',
        password: 'password'
    })),
    fetchSongThenPlay: (songId) => dispatch(fetchSongThenPlay(songId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewSession);