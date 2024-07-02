import AlbumIndex from './album_index';
import { connect } from 'react-redux';

import { fetchAlbums, fetchAlbum } from '../../actions/album_actions';
import { play } from '../../actions/audio_actions';

import { openPlaylistForm } from '../../actions/ui_actions';

const mapStateToProps = (state) => {
  return {
    albums: Object.values(state.entities.albums),
    loading: state.ui.loading.global,
    background: { backgroundColor: '#705a27' },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
    play: () => dispatch(play()),
    openPlaylistForm: () => dispatch(openPlaylistForm()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
