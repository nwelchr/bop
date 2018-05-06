import React from "react";
import merge from 'lodash/merge';

import AddToPlaylistModal from '../modals/add_to_playlist_modal';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({}, this.props, { dropdownIsOpen: false });

    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.playSong = this.playSong.bind(this);
    this.playSongWithTracklist = this.playSongWithTracklist.bind(this);
    this.openAddToPlaylistModal = this.openAddToPlaylistModal.bind(this);
    this.removeFromPlaylist = this.removeFromPlaylist.bind(this);
}

  handleClick() {
    // crazy logic: 
    // If there a song is currently playing:
    // - If the song is playing it's what you click on, pause
    // - Otherwise, fetch the new song and play that instead
    // If there is no song playing:
    // - If the song that was just paused is what you click on, play (without fetching)
    // - Otherwise, fetch the new song and play that
    // If currentSong doesn't exist (i.e. you just opened the app), fetch the song
    
    if (this.props.currentSong) {
        if (this.props.playing) {
            if (this.props.currentSong.id === this.props.song.id 
              && Object.keys(this.props.match.params)[0] === Object.keys(this.props.currentSongParams)[0]
              && Object.values(this.props.match.params)[0] === Object.values(this.props.currentSongParams)[0]
              ) {
                this.props.pause();
            } 
            else { 
              if (Object.keys(this.props.match.params)[0] === Object.keys(this.props.currentSongParams)[0]
              && Object.values(this.props.match.params)[0] === Object.values(this.props.currentSongParams)[0]) {
                this.playSong();
              }
              else {
                this.playSongWithTracklist();
              }
            }
        } else if (this.props.currentSong.id === this.props.song.id 
          && Object.keys(this.props.match.params)[0] === Object.keys(this.props.currentSongParams)[0]
          && Object.values(this.props.match.params)[0] === Object.values(this.props.currentSongParams)[0]
        ) {
            this.props.play();
        } else {
          if (Object.keys(this.props.match.params)[0] === Object.keys(this.props.currentSongParams)[0]
          && Object.values(this.props.match.params)[0] === Object.values(this.props.currentSongParams)[0]) {
            this.playSong();
          }
          else {
            this.playSongWithTracklist();
          }
        }
    } else {
        this.playSongWithTracklist();
    }
  }


  playSongWithTracklist() {
    const tracklistParamKey = Object.keys(this.props.match.params)[0];
    const tracklistParam = tracklistParamKey.slice(0, tracklistParamKey.length - 2);
    const tracklist = this.props[tracklistParam].song_ids;
    this.props.playSongWithTracklist(this.props.song, this.props.match.params, tracklist);
  }

  playSong() {
    this.props.playSong(this.props.song, this.props.match.params);
  }

  showDropdown() {
    this.setState({ dropdownIsOpen: true });
    document.addEventListener("click", this.hideDropdown);
  }

  hideDropdown() {
    this.setState({ dropdownIsOpen: false });
    document.removeEventListener("click", this.hideDropdown);
  }

  handleAddSongClick(e) {
      e.preventDefault();
  }

  openAddToPlaylistModal(e) {
      e.stopPropagation();
      this.props.fetchModalPlaylists(this.props.song.id).then(response => this.props.openAddToPlaylistForm());
  }

  removeFromPlaylist(e) {
    e.stopPropagation();
    this.props.removeSongFromPlaylist(this.props.song.id, this.props.playlist.id).then(response => this.props.fetchPlaylist(this.props.playlist.id));
  }

  render() {
    const songDropdown = (
      <ul className="song-dropdown">
        <li onClick={(e) => this.openAddToPlaylistModal(e)} className="dropdown-li">Add to Playlist</li>
        {(this.props.playlist && this.props.currentUser.id === this.props.playlist.creator_id) ? (<li onClick={(e) => this.removeFromPlaylist(e)} className="dropdown-li">Remove from this Playlist</li>) : ""}
      </ul>
    );

    const { title, mp3_url } = this.props.song;

    let indexItemClass;
    if (this.props.currentSong) {
      // if the current song is the song && the song comes from the same location && the song is currently playing
      indexItemClass =
        this.props.currentSong.id === this.props.song.id 
          && Object.keys(this.props.match.params)[0] === Object.keys(this.props.currentSongParams)[0]
          && Object.values(this.props.match.params)[0] === Object.values(this.props.currentSongParams)[0]
          && this.props.playing
          ? "playing"
          : "";
    }


    return (
      <div>
        <div
          className={`song-index-item-wrapper ${indexItemClass}`}
          onDoubleClick={() => this.handleClick()}>
          <div className="single-click-handler" onClick={() => this.handleClick()}></div>
          <li className="song-index-item">
            <span>{title}</span>
          </li>
          <div className="song-dropdown-wrapper">
            <span className="dropdown-handler" onClick={this.showDropdown}>
              ···
            </span>
            <div
              className={
                ("dropdown-menu ") + (this.state.dropdownIsOpen ? "clicked" : ""
              )}>
              {songDropdown}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SongIndexItem;
