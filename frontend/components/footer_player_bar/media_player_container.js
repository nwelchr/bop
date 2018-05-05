import MediaPlayer from './media_player';
import { connect } from 'react-redux';

import { play, playSong, pause } from '../../actions/audio_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        playing: state.ui.playbar.playing,
        currentSong: state.ui.playbar.currentSong,
        tracklist: state.ui.tracklist,
        songs: state.entities.songs
    });
};

const mapDispatchToProps = (dispatch) => ({
    play: () => dispatch(play()),
    playSong: (song) => dispatch(playSong(song)),
    pause: () => dispatch(pause())
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaPlayer);
