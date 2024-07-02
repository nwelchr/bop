import React from "react"
import { Link } from "react-router-dom"

import { connect } from "react-redux"

import { pause, play, playSong } from "../../actions/audio_actions"
import { fetchSong, fetchSongs } from "../../actions/song_actions"
import {
    fetchArtistThenPlaySong,
    fetchArtist,
} from "../../actions/artist_actions"

class ArtistIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.handlePlay = this.handlePlay.bind(this)
    }

    componentDidMount() {
        $(document)
            .on("mouseenter", ".media-wrapper", function () {
                const that = this
                $(this).find(":button").show()
                $(this).find(".media__body").addClass("hovering")
                $(this).find(".play-pause").addClass("hovering")
                $(this).on("onclick", ":button", function () {
                    $(that).find(".media__body").addClass("hovering")
                })
            })
            .on("mouseleave", ".media-wrapper", function () {
                $(this).find(":button").hide()
                $(this).find(".media__body").removeClass("hovering")
                $(this).find(".play-pause").removeClass("hovering")
            })
    }

    handlePlay(e) {
        e.stopPropagation()
        e.preventDefault()

        const songIds = this.props.artist.songIds
        const { currentSong, playing } = this.props

        if (!(songIds && songIds.length > 0)) {
            return
        }

        // If artist has songs and there's no current song,
        // or if the artist does have that song in it,
        // fetch the artist in question and play it
        if (
            !currentSong ||
            !songIds.includes(currentSong.id) ||
            Object.keys(this.props.currentSongParams)[0] !== "artistId" ||
            Object.values(this.props.currentSongParams)[0] !==
                `${this.props.artist.id}`
        ) {
            this.props.fetchArtistThenPlaySong(this.props.artist.id, {
                artistId: `${this.props.artist.id}`,
            })
        } else if (currentSong && !playing) {
            this.props.play()
        } else {
            this.props.pause()
        }
    }

    render() {
        const artistIndexStyle = {
            borderRadius: "50%",
        }

        const { currentSong, currentSongParams, playing, artist } = this.props
        let songIds = null
        if (this.props.artist.songIds) songIds = this.props.artist.songIds

        const playIcon = <div className="icon play index-item"></div>
        const pauseIcon = <div className="icon pause index-item"></div>

        let playPauseIcon, artistIndexClass
        if (
            playing &&
            currentSong &&
            songIds &&
            songIds.includes(currentSong.id) &&
            Object.keys(currentSongParams)[0] === "artistId" &&
            Object.values(currentSongParams)[0] === `${this.props.artist.id}`
        ) {
            playPauseIcon = pauseIcon
            artistIndexClass = "playing"
        } else {
            playPauseIcon = playIcon
            artistIndexClass = null
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
                            <div
                                className={`media__body ${artistIndexClass}`}
                                style={artistIndexStyle}
                            />
                            <div
                                className="media-loaded"
                                style={artistIndexStyle}
                            />
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
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentSong: state.ui.playbar.currentSong,
    currentSongParams: state.ui.playbar.currentSongParams,
    playing: state.ui.playbar.playing,
})

const mapDispatchToProps = (dispatch) => ({
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    playSong: () => dispatch(playSong()),
    fetchArtistThenPlaySong: (artistId, params) =>
        dispatch(fetchArtistThenPlaySong(artistId, params)),
    fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    fetchSongs: () => dispatch(fetchSongs()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndexItem)
