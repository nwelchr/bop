import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthRoute } from "../../util/route_util";
import SongIndexItemContainer from "../songs/song_index_item_container";
import PlaylistResults from "../search/playlist_results";

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
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

  handleClick(followText) {
    const { user, follow, unfollow, fetchUser } = this.props;
    followText === "Follow" ? follow(user.id) : unfollow(user.id);
  }

  render() {
    console.log("hi");
    if (this.props.loading || (typeof this.props.user === "undefined") || (typeof this.props.user.playlists === "undefined")) {
      return <div />;
    } else {
      console.log("success");
      const { user, background, currentUser } = this.props;

      let followButton = null;
      if (currentUser.id !== user.id) {
        let followText = (currentUser.followed_users.includes(user.id)) ? "Unfollow" : "Follow";
        console.log(followText);
        followButton = <button onClick={() => this.handleClick(followText)}
         className="follow-button">{followText}</button>;
      }

      return (
        <main className="main" style={background}>
        <div className="user-show-wrapper">
        <div className="user-artist-show-wrapper">
        <section className="user-artist-intro user-intro">
          <img src={user.profile_picture} className="profile-picture"/>
          <h1 className="username">{user.username}</h1>
          {followButton}
        </section>
        <div className="user-show-music-index">
            <h1 className="">Public Playlists</h1>
        <div className="music-index">
            <div className="music-index-wrapper">
            <PlaylistResults playlists={user.playlists} />
            </div>
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
