import ArtistShow from './artist_show';
import { connect } from 'react-redux';

import { fetchArtist, deleteArtist, fetchModalArtists } from '../../actions/artist_actions';
import { fetchSong, removeSongFromArtist } from '../../actions/song_actions';
import { play, pause, playSong } from '../../actions/audio_actions';

import { openAddToArtistForm } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
    return({
        artist: state.entities.artists[parseInt(ownProps.match.params.artistId)],
        loading: state.ui.loading.global,
        background: { 'backgroundColor': '#230b27' },
        currentUser: state.session.currentUser,
        currentSong: state.ui.playbar.currentSong,
        playing: state.ui.playbar.playing,
        songs: state.entities.songs
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
    fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    playSong: (song) => dispatch(playSong(song)),
});
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);
