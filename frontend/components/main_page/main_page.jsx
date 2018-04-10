import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import MediaPlayer from '../footer_player_bar/media_player';
import PlaylistIndexContainer from '../playlists/playlist_index_container';
import PlaylistShowContainer from '../show_pages/playlist_show_container';
import SideNavBar from './side_nav_bar';
import FooterPlayerBar from '../footer_player_bar/footer_player_bar';
import MusicPageContainer from './music_page_container';
import BrowseIndexContainer from '../browse/browse_index_container';
import NewPlaylist from '../playlists/new_playlist';
import SearchContainer from '../search/search.jsx';

import AddToPlaylistModal from '../modals/add_to_playlist_modal';

class MainPage extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <SideNavBar />
                <main className="main-wrapper">
                <Route path="/search" component={SearchContainer} />
                <Route path="/browse" component={BrowseIndexContainer} />
                <Route path="/collection/playlists/new" component={NewPlaylist} />
                <Route exact path="/collection/playlists" component={PlaylistIndexContainer} />
                <Route path="/collection/playlists/:playlistId" component={PlaylistShowContainer} />
                <FooterPlayerBar playing={this.props.playing} />
                </main>
                <AddToPlaylistModal />
            </div>
        );
    }
}

export default MainPage;