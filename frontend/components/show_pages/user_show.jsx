import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthRoute } from "../../util/route_util";
import SongIndexItemContainer from "../songs/song_index_item_container";
import PlaylistResults from "../search/playlist_results";

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props
      .fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId != nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId).then(response => this.handleResponse());
    }
  }

  render() {
    if (this.props.loading || (typeof this.props.user === "undefined")) {
      return <div />;
    } else {

      const { user, background } = this.props;

      return (
        <main className="main" style={background}>
        <div class="user-show-wrapper">
        <div class="user-artist-show-wrapper">
        <section class="user-artist-intro user-intro">
          <img src={user.profile_picture} class="profile-picture"/>
          <h1 class="username">{user.username}</h1>
        </section>
        <div className="music-index">
            <div className="music-index-wrapper">

            <h1 class="">Public Playlists</h1>
            <PlaylistResults playlists={user.playlists} />
            </div>
          </div>
        </div>
        </div>
        </main>
      );
    }
  }
}

export default UserShow;
