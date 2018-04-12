import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthRoute } from "../../util/route_util";
import PlaylistIndexItem from "../playlists/playlist_index_item";
import BrowseNavbar from '../navbar/browse_navbar';

class BrowseIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylists(this.props.shouldFetchAll);
  }

  render() {
    if (this.props.loading) {
      return <div />;
    } else {
      return (
        <main className="main" style={this.props.background}>
          <main className="index-page-wrapper">
            <BrowseNavbar />
            <main className="music-index">
              <div className="music-index-wrapper">
                <ul>
                  {this.props.playlists.map(playlist => (
                    <PlaylistIndexItem
                      key={playlist.id}
                      playlist={playlist}
                      renderButton={true}
                    />
                  ))}
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
