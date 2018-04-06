import MainPage from './main_page';
import { connect } from 'react-redux';
import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state) => {
    return ({
        state: state.entities
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
