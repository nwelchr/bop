import React from "react";
import { connect } from "react-redux";
import { NavLink, Route } from 'react-router-dom';
import SearchNavbar from '../navbar/search_navbar';
import AlbumIndexItem from '../albums/album_index_item';

// class PlaylistResults extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { playlists } = this.props;
//     return (
//       <ul>
//           {playlists.map(playlist => 
//                       <PlaylistIndexItem key={playlist.id} playlist={playlist} renderButton={true} />
//           )}
//       </ul>
//     );
//   }
// }

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { albums, artists, playlists, songs, users } = this.props.searches;

    return (
        <main className="index-page-wrapper">
          <SearchNavbar searches={this.props.searches} />
          <div className="music-index">
            joef
            <div className="music-index-wrapper">
              wef
              <ul>
                wef
              </ul>
            </div>
          </div>
        </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  searches: state.entities.searches
});

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, null)(SearchResults);
