import CurrentSongInfo from './current_song_info';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentSong: Object.values(state.entities.songs)[0]
    });
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, null)(CurrentSongInfo);
