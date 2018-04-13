import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { pause, play, playSong } from '../../actions/audio_actions';
import { fetchSong, fetchSongs } from '../../actions/song_actions';
import { fetchAlbumThenPlaySong } from '../../actions/album_actions';

class AlbumIndexItem extends React.Component {

    constructor(props) {
        super(props);

        this.handlePlay = this.handlePlay.bind(this);        
    }

    componentDidMount() {
        $(document).on('mouseenter', '.media-wrapper', function () {
            const that = this;
            $(this).find(":button").show();
            $(this).find(".media__body").addClass("hovering");
            $(this).on('onclick', ':button', function () {
                $(that).find(".media__body").addClass("hovering");
            });
        }).on('mouseleave', '.media-wrapper', function () {
            $(this).find(":button").hide();
            $(this).find(".media__body").removeClass("hovering");
        });
    }

    handlePlay(e) {
        e.stopPropagation();
        e.preventDefault();
        const songIds = this.props.album.song_ids;
        const { currentSong, playing } = this.props;

        // If album has songs and there's no current song, 
        // or if the album does have that song in it,
        // fetch the album in question and play it
        if (songIds.length > 0 && !currentSong || (!songIds.includes(currentSong.id))) {
            // this.props.fetchSongs().then(songs => {
            //     this.props.playSong(songs[1]);
            // }

            this.props.fetchAlbumThenPlaySong(this.props.album.id);
        } else if (currentSong && !playing) {
            this.props.play();
        } else {
            this.props.pause();
        }
    }

    render() {
        const { currentSong, playing, album } = this.props;
        let songIds = null;
        if (this.props.album.song_ids) songIds = this.props.album.song_ids;
        
        const playIcon = <i className="fa fa-play-circle"></i>;
        const pauseIcon = <i className="fa fa-pause-circle"></i>;

        let playPauseIcon, albumIndexClass;
        if (playing && currentSong && songIds && songIds.includes(currentSong.id)) {
            playPauseIcon = pauseIcon;
            albumIndexClass = "playing";
        } else {
            playPauseIcon = playIcon;
            albumIndexClass = null;
        }

        return (
            <div className="index-item-wrapper">
            <div className="media-wrapper">
              <div className="button-wrapper" />
              <Link
                className="music-index-item"
                to={`/albums/${this.props.album.id}`}
              >
                <li className="item-wrapper">
                  <div className="media">
                    <img
                      alt=""
                      className="media__image"
                      src={this.props.album.album_cover_url}
                    />
                    <div className={`media__body ${albumIndexClass}`} />
                    <div className="media-loaded" />
                  </div>
                  <p>{this.props.album.title}</p>
                </li>
              </Link>
              <button
                className={`play-pause ${albumIndexClass}`}
                onClick={this.handlePlay}
              >
                {playPauseIcon}
              </button>
            </div>
            <Link className="user-link" to={`/artists/${album.artist_id}`}>{album.artistName}</Link>
            </div>
          );
    }
}

const mapStateToProps = state => ({
    currentSong: state.ui.playbar.currentSong,
    playing: state.ui.playbar.playing
});

const mapDispatchToProps = dispatch => ({
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    playSong: (song) => dispatch(playSong(song)),
    fetchAlbumThenPlaySong: (albumId) => dispatch(fetchAlbumThenPlaySong(albumId)),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndexItem);