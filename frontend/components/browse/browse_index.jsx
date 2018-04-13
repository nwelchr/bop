import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthRoute } from "../../util/route_util";
import PlaylistIndexItem from "../playlists/playlist_index_item";
import AlbumIndexItem from "../albums/album_index_item";
import ArtistIndexItem from "../artists/artist_index_item";
import BrowseNavbar from '../navbar/browse_navbar';

class BrowseIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylists(this.props.shouldFetchAll).then(this.props.fetchAlbums()).then(this.props.fetchArtists());
  }

  render() {
    if (this.props.loading || !this.props.artists || !this.props.albums || !this.props.playlists) {
      return <div />;
    } else {

      const { playlists, albums, artists, currentUser } = this.props;
      
      let explorePlaylists;
      if (playlists && currentUser.playlistIds) {
      explorePlaylists = playlists.filter(playlist => !currentUser.playlistIds.includes(playlist.id));

      if (explorePlaylists) explorePlaylists = explorePlaylists.map(playlist => (
        <PlaylistIndexItem
          key={playlist.id}
          playlist={playlist}
          renderButton={true}
        />
      ));
      }

      // let exploreAlbums;
      // if (albums && currentUser.albumIds) {
      //   exploreAlbums = albums.filter(album => !currentUser.albumIds.includes(album.id));
        
      //   if (exploreAlbums) exploreAlbums = exploreAlbums.map(album => (
      //     <AlbumIndexItem
      //       key={album.id}
      //       playlist={album}
      //       renderButton={true}
      //     />
      //   ));
      // }

      // let exploreArtists;
      // if (artists && currentUser.artistIds) {
      // exploreArtists = artists.filter(artist => !currentUser.artistIds.includes(artist.id));

      // if (exploreArtists) exploreArtists = exploreAlbums.map(artist => (
      //   <ArtistIndexItem
      //     key={artist.id}
      //     playlist={artist}
      //     renderButton={true}
      //   />
      // ));
      // }

      // console.log(explorePlaylists, exploreAlbums, exploreArtists);

      return (
        <main className="main" style={this.props.background}>
          <main className="index-page-wrapper">
            <BrowseNavbar />
            <main className="music-index">
              <div className="music-index-wrapper">
                <ul>
                  {explorePlaylists}
                  {/* {exploreAlbums}
                  {exploreArtists} */}
                </ul>
              </div>
            </main>
          </main>
        </main>
      );
    }
  }
}

export default BrowseIndex;
