import { connect } from 'react-redux';
import { fetchSongs, fetchSong } from '../../actions/song_actions';
import { play, pause, playSong } from '../../actions/audio_actions';
import { openAddToPlaylistForm } from '../../actions/ui_actions';

import SongCollectionIndex from './song_collection_index';

import selectors from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ui.loading.global,
    background: { backgroundColor: '#202753' },
    currentUser: state.session.currentUser,
    currentSong: state.ui.playbar.currentSong,
    playing: state.ui.playbar.playing,
    songs: Object.values(state.entities.songs),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    playSong: (song) => dispatch(playSong(song)),
    openAddToPlaylistForm: () => dispatch(openAddToPlaylistForm()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongCollectionIndex);
