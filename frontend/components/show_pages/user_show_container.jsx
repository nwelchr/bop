import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUser } from '../../actions/user_actions';
import { play, playSong } from '../../actions/audio_actions';
import { openPlaylistForm } from '../../actions/ui_actions';
import { follow, unfollow } from '../../actions/follow_actions';

import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[parseInt(ownProps.match.params.userId)],
    loading: state.ui.loading.global,
    background: { backgroundColor: '#0e3633' },
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    follow: (userId) => dispatch(follow('User', userId)),
    unfollow: (userId) => dispatch(unfollow('User', userId)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserShow)
);
