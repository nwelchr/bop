import BrowseIndex from './browse_index';
import { connect } from 'react-redux';
import { makeGetNewPlaylists } from '../../selectors/playlist_selectors';
import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { play } from '../../actions/audio_actions';

const makeMapStateToProps = () => {
  const getNewPlaylists = makeGetNewPlaylists();
  const mapStateToProps = state => {
    return {
      playlists: getNewPlaylists(state),
      loading: state.ui.loading.global,
      background: { backgroundColor: '#3c3f5b' },
      shouldFetchAll: true,
      currentUser: state.session.currentUser
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: shouldFetchAll => dispatch(fetchPlaylists(shouldFetchAll)),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchArtists: () => dispatch(fetchArtists()),
    fetchSongs: () => dispatch(fetchSongs()),
    play: () => dispatch(play())
  };
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(BrowseIndex);
