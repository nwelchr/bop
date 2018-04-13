import BrowseIndex from './browse_index';
import { connect } from 'react-redux';

import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { play } from '../../actions/audio_actions';

import * as BrowseSelector from '../../selectors/browse_selector';

const mapStateToProps = (state) => {
    return({
        playlists: Object.values(state.entities.playlists),
        albums: Object.values(state.entities.albums),
        artists: Object.values(state.entities.artists),
        loading: state.ui.loading.global,
        background: { 'backgroundColor': '#3c3f5b' },
        shouldFetchAll: true,
        currentUser: state.session.currentUser
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchPlaylists: (shouldFetchAll) => dispatch(fetchPlaylists(shouldFetchAll)),
        fetchAlbums: () => dispatch(fetchAlbums()),
        fetchArtists: () => dispatch(fetchArtists()),
        fetchSongs: () => dispatch(fetchSongs()),
        play: () => dispatch(play())
    });};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseIndex);
