import MediaPlayer from './media_player';
import { connect } from 'react-redux';

import { play, pause } from '../../actions/audio_actions';

const mapStateToProps = (state) => {
    return ({
        playing: state.ui.playbar.playing
    });
};

const mapDispatchToProps = (dispatch) => ({
    play: () => dispatch(play()),
    pause: () => dispatch(pause())
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaPlayer);
