import MediaPlayer from './media_player';
import { connect } from 'react-redux';

import { play, playSong, pause } from '../../actions/audio_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        playing: state.ui.playbar.playing,
        currentSong: state.ui.playbar.currentSong,
        currentSongParams: state.ui.playbar.currentSongParams,
        tracklist: state.ui.tracklist,
        songs: Object.values(state.entities.songs),
        isFirstSong: state.ui.playbar.isFirstSong
    });
};

const mapDispatchToProps = (dispatch) => ({
    play: () => dispatch(play()),
    playSong: (song, params) => dispatch(playSong(song, params)),
    pause: () => dispatch(pause())
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaPlayer);
