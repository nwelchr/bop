import PlaylistIndex from './playlist_index';
import { connect } from 'react-redux';

import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state) => {
    return({
    playlists: Object.values(state.entities.playlists)
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylist: () => dispatch(fetchPlaylist())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
