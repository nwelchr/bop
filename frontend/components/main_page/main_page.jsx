import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import MediaPlayer from '../footer_player_bar/media_player';
import PlaylistIndexContainer from '../playlists/playlist_index_container';
import PlaylistShowContainer from '../show_pages/playlist_show_container';
import SideNavBar from './side_nav_bar';
import FooterPlayerBar from '../footer_player_bar/footer_player_bar';
import MusicPageContainer from './music_page_container';
import BrowseIndexContainer from '../browse/browse_index_container';
import SearchContainer from '../search/search';
import SongCollectionIndexContainer from '../songs/song_collection_index_container';
import AlbumIndexContainer from '../albums/album_index_container';
import AlbumShowContainer from '../show_pages/album_show_container';
import ArtistIndexContainer from '../artists/artist_index_container';
import ArtistShowContainer from '../show_pages/artist_show_container';
import AddToPlaylistModal from '../modals/add_to_playlist_modal';
import NewPlaylistModal from '../modals/new_playlist_modal';
import UserAccountPage from '../show_pages/user_account_page';
import UserShowPageContainer from '../show_pages/user_show_container';
import UserIndex from '../users/user_index';
import NewSessionContainer from '../session/new_session_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.currentUser ? (
      <div className="app-wrapper">
        <SideNavBar currentUser={this.props.currentUser} />
        <main className="main-wrapper">
          <ProtectedRoute path="/search" component={SearchContainer} />
          <ProtectedRoute path="/browse" component={BrowseIndexContainer} />
          <ProtectedRoute
            exact
            path="/collection/songs"
            component={SongCollectionIndexContainer}
          />
          <ProtectedRoute path="/account" component={UserAccountPage} />
          <ProtectedRoute
            exact
            path="/collection/albums"
            component={AlbumIndexContainer}
          />
          <ProtectedRoute
            path="/albums/:albumId"
            component={AlbumShowContainer}
          />
          <ProtectedRoute
            exact
            path="/collection/artists"
            component={ArtistIndexContainer}
          />
          <ProtectedRoute
            path="/artists/:artistId"
            component={ArtistShowContainer}
          />
          <ProtectedRoute
            exact
            path="/collection/playlists"
            component={PlaylistIndexContainer}
          />
          <ProtectedRoute
            path="/playlists/:playlistId"
            component={PlaylistShowContainer}
          />
          <ProtectedRoute exact path="/users" component={UserIndex} />
          <ProtectedRoute
            path="/users/:userId"
            component={UserShowPageContainer}
          />
          <FooterPlayerBar playing={this.props.playing} />
        </main>
        <AddToPlaylistModal />
        <NewPlaylistModal />
      </div>
    ) : (
      <NewSessionContainer />
    );
  }
}

export default MainPage;
