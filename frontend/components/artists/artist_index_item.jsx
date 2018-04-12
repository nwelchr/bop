import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { pause, play, playSong } from '../../actions/audio_actions';
import { fetchSong, fetchSongs } from '../../actions/song_actions';
import { fetchArtistThenPlaySong, fetchArtist } from '../../actions/artist_actions';

class ArtistIndexItem extends React.Component {

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

        const songIds = this.props.artist.songIds;
        const { currentSong, playing } = this.props;

        // If artist has songs and there's no current song, 
        // or if the artist does have that song in it,
        // fetch the artist in question and play it
        if (songIds.length > 0 && !currentSong || (!songIds.includes(currentSong.id))) {
            this.props.fetchArtistThenPlaySong(this.props.artist.id);
        } else if (currentSong && !playing) {
            this.props.play();
        } else {
            this.props.pause();
        }
    }

    render() {
        const artistIndexStyle = {
          borderRadius: '50%'
        };

        const { currentSong, playing } = this.props;
        let songIds = null;
        if (this.props.artist.songIds) songIds = this.props.artist.songIds;
        
        const playIcon = <i className="fa fa-play-circle"></i>;
        const pauseIcon = <i className="fa fa-pause-circle"></i>;

        let playPauseIcon, artistIndexClass;
        if (playing && currentSong && songIds && songIds.includes(currentSong.id)) {
            playPauseIcon = pauseIcon;
            artistIndexClass = "playing";
        } else {
            playPauseIcon = playIcon;
            artistIndexClass = null;
        }

        return (
            <div className="media-wrapper">
              <div className="button-wrapper" />
              <Link
                className="music-index-item"
                to={`/artists/${this.props.artist.id}`}
              >
                <li className="item-wrapper">
                  <div className="media">
                    <img
                      alt=""
                      style={artistIndexStyle}
                      className="media__image"
                      src={this.props.artist.artist_artwork_url}
                    />
                    <div className={`media__body ${artistIndexClass}`} style={artistIndexStyle} />
                    <div className="media-loaded" style={artistIndexStyle} />
                  </div>
                  <p>{this.props.artist.name}</p>
                </li>
              </Link>
              <button
                className={`play-pause ${artistIndexClass}`}
                onClick={this.handlePlay}
              >
                {playPauseIcon}
              </button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentSong: state.ui.playbar.currentSong,
    playing: state.ui.playbar.playing,
});

const mapDispatchToProps = dispatch => ({
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    playSong: () => dispatch(playSong()),
    fetchArtistThenPlaySong: (artistId) => dispatch(fetchArtistThenPlaySong(artistId)),
    fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndexItem);
