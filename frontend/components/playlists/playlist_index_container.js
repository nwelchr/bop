import PlaylistIndex from './playlist_index';
import { connect } from 'react-redux';
import { makeGetUserPlaylists } from '../../selectors/playlist_selectors';
import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions';
import { openPlaylistForm } from '../../actions/ui_actions';

const makeMapStateToProps = () => {
  const getUserPlaylists = makeGetUserPlaylists();
  const mapStateToProps = state => {
    return {
      playlists: getUserPlaylists(state),
      loading: state.ui.loading.global,
      background: { backgroundColor: '#2e263b' },
      currentUser: state.session.currentUser
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    openPlaylistForm: () => dispatch(openPlaylistForm())
  };
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(PlaylistIndex);
