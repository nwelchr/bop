import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import MediaPlayer from '../footer_player_bar/media_player';
import PlaylistIndexContainer from '../playlists/playlist_index_container';
import PlaylistShowContainer from '../show_pages/playlist_show_container';
import SideNavBar from './side_nav_bar';
import FooterPlayerBar from '../footer_player_bar/footer_player_bar';

class MainPage extends React.Component {
    render() {
        return (
            <div className="main-wrapper">
                <SideNavBar />
                <main className="main">
                    <Link to="/collection/playlists">Go to all playlists!</Link>
                    <Route exact path="/collection/playlists" component={PlaylistIndexContainer} />
                    <Route path="/collection/playlists/:playlistId" component={PlaylistShowContainer} />
                    </main>
                <FooterPlayerBar />
            </div>
        );
    }
}

export default MainPage;