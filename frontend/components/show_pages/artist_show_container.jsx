import ArtistShow from './artist_show';
import { connect } from 'react-redux';

import {
  fetchArtist,
  deleteArtist,
  fetchModalArtists,
} from '../../actions/artist_actions';
import { fetchSong, removeSongFromArtist } from '../../actions/song_actions';
import { play, pause, playSong } from '../../actions/audio_actions';

import { openAddToArtistForm } from '../../actions/ui_actions';

import { follow, unfollow } from '../../actions/follow_actions';

import { songSelector } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const artist =
    state.entities.artists[parseInt(ownProps.match.params.artistId)];
  let songs;
  if (artist)
    songs = songSelector(artist.songIds, Object.values(state.entities.songs));
  return {
    artist,
    loading: state.ui.loading.global,
    background: { backgroundColor: '#230b27' },
    currentUser: state.session.currentUser,
    currentSong: state.ui.playbar.currentSong,
    playing: state.ui.playbar.playing,
    songs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    playSong: (song) => dispatch(playSong(song)),
    follow: (artistId) => dispatch(follow('Artist', artistId)),
    unfollow: (artistId) => dispatch(unfollow('Artist', artistId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);
