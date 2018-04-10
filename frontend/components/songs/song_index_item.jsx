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
            if (this.props.currentSong.id === this.props.song.id) {
                this.props.pause();
            } 
            else { 
                this.playSong();
            }
        } else if (this.props.currentSong.id === this.props.song.id) {
            this.props.play();
        } else {
            this.playSong();
        }
    } else {
        this.playSong();
    }
  }

  playSong() {
    this.props.playSong(this.props.song);
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
        {(this.props.currentUser.id === this.props.playlist.creator_id) ? (<li onClick={(e) => this.removeFromPlaylist(e)} className="dropdown-li">Remove from this Playlist</li>) : ""}
      </ul>
    );

    const { title, mp3_url } = this.props.song;

    let indexItemClass;
    if (this.props.currentSong) {
      indexItemClass =
        this.props.currentSong.id === this.props.song.id && this.props.playing
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
