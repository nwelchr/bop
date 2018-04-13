import React from "react";
import { Link, NavLink, withRouter, Route } from "react-router-dom";
import { AuthRoute } from "../../util/route_util";
import SongIndexItemContainer from "../songs/song_index_item_container";
import PlaylistResults from "../search/playlist_results";
import ArtistResults from "../search/artist_results";
import UserResults from "../search/user_results";

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.followingResults = this.followingResults.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId != nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  handleClick(followText) {
    const { user, follow, unfollow, fetchUser } = this.props;
    followText === "Follow" ? follow(user.id).then(this.setState( {followText: "Unfollow"} )) : unfollow(user.id).then(this.setState({ followText: "Follow"} ));
  }

  followingResults() {
    const followedArtists = this.props.user.followedArtists.length > 0 ? (<section class="followed-artists"><h1>Followed Artists</h1><ArtistResults artists={this.props.user.followedArtists} followButton={true} /></section>) : null;
    const followedUsers = this.props.user.followedUsers.length > 0 ? (<section class="followed-users"><h1>Followed Users</h1><UserResults users={this.props.user.followedUsers} followButton={true} /></section>) : null;


    return (<div class="following-wrapper">
      {followedArtists}
      {followedUsers}
      </div>);
  }

  render() {
    
    if (this.props.loading || (typeof this.props.user === "undefined") || (typeof this.props.user.playlists === "undefined")) {
      return <div />;
    } else {
      const { user, background, currentUser } = this.props;

      let followButton = null;
      if (currentUser.id !== user.id) {
        let followText = (currentUser.followed_users && currentUser.followed_users.includes(user.id) ? "Unfollow" : "Follow");
        followButton = <button onClick={() => this.handleClick(followText)}
         className="follow-button">{followText}</button>;
      }

      let playlistHeading = null;
      if (user.playlists && user.playlists.length > 0) playlistHeading = (<h1 className="">Public Playlists</h1>);

      let numFollowers = (user.followerIds !== null) ? user.followerIds.length === 1 ? "1 follower" : `${user.followerIds.length} followers` : "0 followers";

      return (
        <main className="main" style={background}>
        <div className="user-show-wrapper">
        <div className="user-artist-show-wrapper">
        <section className="user-artist-intro user-intro">
          <img src={user.profile_picture} className="profile-picture"/>
          <h1 className="username">{user.username}</h1>
          <h2 class="followers">{numFollowers}</h2>
          {followButton}
        </section>

        <div className="user-show-music-index">
        <nav className="nav-flex-wrapper">
                    <nav className="top-nav-bar">
                        <li className="top-nav-link-wrapper"><NavLink exact to={`/users/${user.id}`} activeClassName="nav-link-selected"><span>Playlists</span></NavLink>
                        </li>
                        <li className="top-nav-link-wrapper"><NavLink exact to={`/users/${user.id}/followers`} activeClassName="nav-link-selected"><span>Followers</span></NavLink></li>
                        <li className="top-nav-link-wrapper"><NavLink exact to={`/users/${user.id}/following`} activeClassName="nav-link-selected"><span>Following</span></NavLink></li>
                    </nav>
                    </nav>
        <div className="music-index">
            <div className="music-index-wrapper">
            <Route exact path={`/users/${user.id}`} render={() => <PlaylistResults playlists={user.playlists} />} />
            <Route path={`/users/${user.id}/followers`} render={() => <UserResults users={user.followers} />} />
            <Route path={`/users/${user.id}/following`} render={this.followingResults} />
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
