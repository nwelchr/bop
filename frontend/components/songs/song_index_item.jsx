import React from "react";

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownIsOpen: false
    };

    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.handleFetchSong = this.handleFetchSong.bind(this);
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
                this.handleFetchSong();
            }
        } else if (this.props.currentSong.id === this.props.song.id) {
            this.props.play();
        } else {
            this.handleFetchSong();
        }
    } else {
        this.handleFetchSong();
    }
  }

  handleFetchSong() {
    this.props
        .fetchSong(this.props.song.id)
        .then(response => this.props.playSong(response.song));
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

  render() {
    const songDropdown = (
      <ul class="song-dropdown">
        <li class="dropdown-li">Add to Playlist</li>
        <li class="dropdown-li">Copy Song Link</li>
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
            <span class="dropdown-handler" onClick={this.showDropdown}>
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
