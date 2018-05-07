import React from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { pause, play, playSong } from "../../actions/audio_actions";
import { fetchSong, fetchSongs } from "../../actions/song_actions";
import { fetchPlaylistThenPlaySong } from "../../actions/playlist_actions";

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount() {
    $(document)
      .on("mouseenter", ".media-wrapper", function() {
        const that = this;
        $(this)
          .find(":button")
          .show();
        $(this)
          .find(".media__body")
          .addClass("hovering");
        $(this)
          .find(".play-pause")
          .addClass("hovering");
        $(this).on("onclick", ":button", function() {
          $(that)
            .find(".media__body")
            .addClass("hovering");
        });

      })
      .on("mouseleave", ".media-wrapper", function() {
        $(this)
          .find(":button")
          .hide();
        $(this)
          .find(".media__body")
          .removeClass("hovering");
        $(this)
        .find(".play-pause")
        .removeClass("hovering");
      });
  }

  componentWillReceiveProps(nextProps) {
  }

  handlePlay(e) {
    e.stopPropagation();
    e.preventDefault();
    const songIds = this.props.playlist.songIds;
    const { currentSong, playing } = this.props;

    if (!(songIds && songIds.length > 0)) {
      return;
    }

    // If playlist has songs and there's no current song,
    // or if the playlist does have that song in it,
    // fetch the playlist in question and play it
    if (
      !currentSong 
      || !songIds.includes(currentSong.id)
      || Object.keys(this.props.currentSongParams)[0] !== "playlistId"
      || Object.values(this.props.currentSongParams)[0] !== `${this.props.playlist.id}`
    ) {
      this.props.fetchPlaylistThenPlaySong(this.props.playlist.id, { playlistId: `${this.props.playlist.id}` });
    } else if (currentSong && !playing) {
      this.props.play();
    } else {
      this.props.pause();
    }
  }

  render() {
    const { currentSong, currentSongParams, playing, playlist } = this.props;

    let songIds = null;
    if (this.props.playlist.songIds) songIds = this.props.playlist.songIds;

    const playIcon = <div className="icon play index-item"></div>;
    const pauseIcon = <div className="icon pause index-item"></div>;

    let playPauseIcon, playlistIndexClass;

    if (playing 
        && currentSong 
        && songIds 
        && songIds.includes(currentSong.id)
        && Object.keys(currentSongParams)[0] === "playlistId"
        && Object.values(currentSongParams)[0] === `${this.props.playlist.id}`
      ) {
      playPauseIcon = pauseIcon;
      playlistIndexClass = "playing";
    } else {
      playPauseIcon = playIcon;
      playlistIndexClass = null;
    }
    
    let albumCover;
    if (typeof this.props.playlist.album_cover_url === "string") {
      albumCover = (
        <div className="media">
              <img
        alt=""
        className="media__image"
        src={this.props.playlist.album_cover_url}
      />
              <div className={`media__body ${playlistIndexClass}`} />
              <div className="media-loaded" />
            </div>);
    } else if (this.props.playlist.album_cover_url.length === 4) {
      albumCover = (
        <div className="media">
              <img 
              alt=""
              className="media__image collage"
              src={this.props.playlist.album_cover_url[0]}
              />
              <img
                alt=""
                className="media__image collage"
                src={this.props.playlist.album_cover_url[1]}
              />
              <img
                alt=""
                className="media__image collage"
                src={this.props.playlist.album_cover_url[2]}
              />
              <img
                alt=""
                className="media__image collage"
                src={this.props.playlist.album_cover_url[3]}
              />
              <div className={`media__body ${playlistIndexClass}`} />
              <div className="media-loaded" />
            </div>
      );
    }

    return (
      <div className="index-item-wrapper">
      <div className="media-wrapper">
        <div className="button-wrapper" />
        <Link
          className="music-index-item"
          to={`/playlists/${this.props.playlist.id}`}
        >
          <li className="item-wrapper">
            {albumCover}
            <p>{this.props.playlist.name}</p>
          </li>
        </Link>
        <button
          className={`play-pause ${playlistIndexClass}`}
          onClick={this.handlePlay}
        >
          {playPauseIcon}
        </button>
      </div>
        <Link className="user-link" to={`/users/${playlist.creator_id}`}>{playlist.creatorName}</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentSong: state.ui.playbar.currentSong,
  currentSongParams: state.ui.playbar.currentSongParams,
  playing: state.ui.playbar.playing
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  playSong: () => dispatch(playSong()),
  fetchPlaylistThenPlaySong: (playlistId, params) =>
    dispatch(fetchPlaylistThenPlaySong(playlistId, params)),
  fetchSong: songId => dispatch(fetchSong(songId)),
  fetchSongs: () => dispatch(fetchSongs())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistIndexItem));
