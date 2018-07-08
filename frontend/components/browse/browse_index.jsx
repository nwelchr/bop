import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import PlaylistIndexItem from '../playlists/playlist_index_item';
import AlbumIndexItem from '../albums/album_index_item';
import ArtistIndexItem from '../artists/artist_index_item';
import BrowseNavbar from '../navbar/browse_navbar';

class BrowseIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylists(this.props.shouldFetchAll);
  }

  render() {
    if (this.props.loading || !this.props.playlists) {
      return <div />;
    } else {
      const { playlists, currentUser } = this.props;
      let newPlaylists;
      newPlaylists = playlists
        ? this.props.playlists.map(playlist => (
            <PlaylistIndexItem
              key={playlist.id}
              playlist={playlist}
              renderButton={true}
            />
          ))
        : null;

      return (
        <main className="main" style={this.props.background}>
          <main className="index-page-wrapper">
            <BrowseNavbar />
            <h1 className="browse-index-h1">Just For You</h1>
            <main className="music-index">
              <div className="music-index-wrapper">
                <ul>{newPlaylists}</ul>
              </div>
            </main>
          </main>
        </main>
      );
    }
  }
}

export default BrowseIndex;
