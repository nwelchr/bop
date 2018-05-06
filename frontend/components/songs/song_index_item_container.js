import PlaylistShow from '../show_pages/playlist_show';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchPlaylist, deletePlaylist, fetchModalPlaylists } from '../../actions/playlist_actions';
import { fetchSongs, fetchSong, removeSongFromPlaylist } from '../../actions/song_actions';
import { play, pause, playSong, playSongWithTracklist } from '../../actions/audio_actions';
import { openAddToPlaylistForm } from '../../actions/ui_actions';

import SongIndexItem from './song_index_item';

import selectors from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    return({
        loading: state.ui.loading.global,
        background: { 'backgroundColor': '#7a1a45' },
        currentUser: state.session.currentUser,
        currentSong: state.ui.playbar.currentSong,
        currentSongParams: state.ui.playbar.currentSongParams,
        playing: state.ui.playbar.playing,
        songs: state.entities.songs
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
    fetchSongs: () => dispatch(fetchSongs()),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    playSong: (song, params) => dispatch(playSong(song, params)),
    playSongWithTracklist: (song, params, tracklist) => dispatch(playSongWithTracklist(song, params, tracklist)),
    openAddToPlaylistForm: () => dispatch(openAddToPlaylistForm()),
    fetchModalPlaylists: (songToAddId) => dispatch(fetchModalPlaylists(songToAddId)),
    removeSongFromPlaylist: (songId, playlistId) => dispatch(removeSongFromPlaylist(songId, playlistId))
});
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongIndexItem));
