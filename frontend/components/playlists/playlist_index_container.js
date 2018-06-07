import PlaylistIndex from './playlist_index';
import { connect } from 'react-redux';

import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions';
import { play, playSong } from '../../actions/audio_actions';

import { openPlaylistForm } from '../../actions/ui_actions';

const mapStateToProps = state => {
  return {
    playlists: Object.values(state.entities.playlists),
    loading: state.ui.loading.global,
    background: { backgroundColor: '#2e263b' },
    currentUser: state.session.currentUser,
    shouldDisplayUsersPlaylists: true
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    openPlaylistForm: () => dispatch(openPlaylistForm())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex);
