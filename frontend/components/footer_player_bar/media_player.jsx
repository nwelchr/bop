import React from "react"
import ReactPlayer from "react-player"

import Duration from "./Duration"

import CurrentSongInfoContainer from "./current_song_info_container"

class MediaPlayer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentSong: "",
            playing: false,
            volume: 0.8,
            savedVolume: 0.8,
            muted: false,
            played: 0,
            loaded: 0,
            duration: 0,
            loop: "none",
            shuffle: false,
            shuffledTracklist: [],
        }

        this.togglePlay = this.togglePlay.bind(this)
        this.toggleShuffle = this.toggleShuffle.bind(this)
        this.nextSong = this.nextSong.bind(this)
        this.prevSong = this.prevSong.bind(this)
        this.stop = this.stop.bind(this)
        this.handleVolume = this.handleVolume.bind(this)
        this.toggleMuted = this.toggleMuted.bind(this)
        this.toggleLoop = this.toggleLoop.bind(this)
        // this.onPlay = this.onPlay.bind(this);
        // this.onPause = this.onPause.bind(this);
        this.onSeekMouseDown = this.onSeekMouseDown.bind(this)
        this.onSeekChange = this.onSeekChange.bind(this)
        this.onSeekMouseUp = this.onSeekMouseUp.bind(this)
        this.onProgress = this.onProgress.bind(this)
        this.onDuration = this.onDuration.bind(this)
        this.ref = this.ref.bind(this)
        this.load = this.load.bind(this)
        this.onEnded = this.onEnded.bind(this)
        this.generateShuffledTracklist =
            this.generateShuffledTracklist.bind(this)
    }

    // TODO: unexpected behavior: start playlist unshuffled, click shuffle, go into playlist
    // new song starts for no reason
    componentWillReceiveProps(nextProps) {
        // if tracklist is being generated for the first time or there's a new one

        const { tracklist: nextTracklist } = nextProps
        const { tracklist } = this.props
        const { shuffle } = this.state

        const needToShuffleTracklist =
            ((!tracklist && nextTracklist) ||
                (tracklist && tracklist !== nextTracklist)) &&
            shuffle
        if (needToShuffleTracklist) {
            console.log("NEED TO SHUFFLE TRACKLIST")
            const shuffledTracklist =
                this.generateShuffledTracklist(nextTracklist)
            this.setState({ shuffledTracklist })
        }

        // to resolve issue with first song being played when on shuffle
        if (nextProps.isFirstSong && shuffle) {
            const shuffledTracklist = this.generateShuffledTracklist(
                nextTracklist,
                nextTracklist[Math.floor(Math.random() * nextTracklist.length)]
            )
            console.log("SET SHUFFLED TRACKLIST ON FIRST SONG?")
            this.setState({ shuffledTracklist })
            const firstShuffledSong = nextProps.songs.find(
                (song) => song.id === shuffledTracklist[0]
            )
            this.props.playSong(firstShuffledSong, nextProps.currentSongParams)
            console.log("WHAT IS GOING ON HERE", nextProps.playing)
            this.setState({
                playing: nextProps.playing,
                currentSong: firstShuffledSong.mp3_url,
            })
            return
        } else if (nextProps.currentSong !== this.props.currentSong) {
            console.log("WHAT THE HELL IS GOING ON HERE", nextProps.playing)
            this.setState({
                playing: nextProps.playing,
                currentSong: nextProps.currentSong.mp3_url,
            })
        }
        // for some reason this wasn't changing if i wasn't shuffling and i was clicking on another indexitem play button

        if (nextProps.currentSong) {
            if (this.props.currentSong) {
                if (
                    !(
                        Object.keys(this.props.currentSongParams)[0] ===
                            Object.keys(nextProps.currentSongParams)[0] &&
                        Object.values(this.props.currentSongParams)[0] ===
                            Object.values(nextProps.currentSongParams)[0]
                    )
                ) {
                    this.player.seekTo(0)
                } else if (nextProps.currentSong !== this.props.currentSong) {
                    console.log(
                        "WHAT THE EVEN HELL IT IS GOING ON HERE",
                        nextProps.playing
                    )

                    this.setState({
                        playing: nextProps.playing,
                        currentSong: nextProps.currentSong.mp3_url,
                    })
                }
            } else if (nextProps.currentSong !== this.props.currentSong) {
                console.log(
                    "WHAT EVEN WHAT???? IS IT THE HELL EVEN A... GOING ON HERE",
                    nextProps.playing
                )

                this.setState({
                    playing: nextProps.playing,
                    currentSong: nextProps.currentSong.mp3_url,
                })
            }
        }
    }

    load(url) {
        this.setState({
            url: url,
            played: 0,
            playing: true,
        })
    }

    ref(player) {
        this.player = player
    }

    togglePlay() {
        if (!this.props.currentSong) {
            return
        }
        if (this.state.playing === true) this.props.pause()
        else this.props.play()
    }

    nextSong() {
        if (!(this.props.tracklist && this.props.currentSong)) {
            return
        }

        let tracklist = this.state.shuffle
            ? this.state.shuffledTracklist
            : this.props.tracklist

        let currSongIdx = tracklist.indexOf(this.props.currentSong.id)
        if (currSongIdx >= tracklist.length - 1) {
            // loop tracklist around
            if (this.state.loop === "loopTracklist") {
                currSongIdx = -1
            } else {
                this.stop()
                return
            }
        }
        const nextSongId = tracklist[currSongIdx + 1]
        const nextSong = this.props.songs.filter(
            (song) => song.id === nextSongId
        )[0]
        this.setState({ played: 0 })
        this.props.playSong(nextSong, this.props.currentSongParams)
    }

    prevSong() {
        if (!(this.props.tracklist && this.props.currentSong)) {
            return
        }

        if (this.state.duration * this.state.played >= 3) {
            this.player.seekTo(0)
            return
        }

        let tracklist = this.state.shuffle
            ? this.state.shuffledTracklist
            : this.props.tracklist

        let currSongIdx = tracklist.indexOf(this.props.currentSong.id)
        if (currSongIdx === 0) {
            // loop around
            if (this.state.loop === "loopTracklist") {
                currSongIdx = tracklist.length
            } else {
                this.stop()
                return
            }
        }

        const nextSongId = tracklist[currSongIdx - 1]
        const nextSong = this.props.songs.filter(
            (song) => song.id === nextSongId
        )[0]
        this.props.playSong(nextSong, this.props.currentSongParams)
    }

    stop() {
        console.log("STOP")
        this.setState({ playing: false, played: 0 })
        this.player.seekTo(0)
    }

    handleVolume(e) {
        this.setState({ volume: e.target.value, savedVolume: e.target.value })
    }

    toggleMuted() {
        if (this.state.volume < 0.001) {
            this.setState({ volume: this.state.savedVolume })
        } else {
            this.setState({ volume: 0 })
        }
    }

    toggleShuffle() {
        const shuffle = !this.state.shuffle

        let shuffledTracklist
        if (this.props.tracklist.length) {
            if (!shuffle) {
                shuffledTracklist = []
            } else {
                shuffledTracklist = this.generateShuffledTracklist(
                    this.props.tracklist,
                    this.props.currentSong.id
                )
                this.setState({
                    shuffledTracklist,
                })
            }
        }

        this.setState({ shuffle, shuffledTracklist })
    }

    generateShuffledTracklist(arr, nextSong) {
        const shuffledArr = arr.slice(0)
        let j, x, i, shuffleIdx
        for (i = shuffledArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]]
        }

        if (nextSong) {
            shuffleIdx = shuffledArr.indexOf(nextSong)
            ;[shuffledArr[0], shuffledArr[shuffleIdx]] = [
                shuffledArr[shuffleIdx],
                shuffledArr[0],
            ]
        }

        return shuffledArr
    }

    toggleLoop() {
        let loop
        switch (this.state.loop) {
            case "none":
                loop = "loopSong"
                break
            case "loopSong":
                loop = "loopTracklist"
                break
            case "loopTracklist":
                loop = "none"
                break
        }
        this.setState({ loop })
    }

    onEnded() {
        if (!(this.state.loop === "loopSong")) {
            this.nextSong()
        }
    }

    onSeekMouseDown() {
        this.setState({ seeking: true })
    }

    onSeekChange(e) {
        if (!this.state.playing && !this.state.currentSong) {
            return
        }
        this.setState({ played: e.target.value })
    }

    onSeekMouseUp(e) {
        this.setState({ seeking: false })
        // this.setState({played: e.target.value});
        this.player.seekTo(e.target.value)
    }

    onProgress(state) {
        // If song is finished (played value is 1), set back to the beginning
        // Otherwise, set played
        if (!this.state.seeking) {
            this.setState({ played: state.played === 1 ? "0" : state.played })
        }
    }

    // happens as soon as the component renders
    onDuration(duration) {
        this.setState({ duration })
    }

    render() {
        console.log(this.state.playing === true, "is playing")

        const {
            currentSong,
            playing,
            volume,
            muted,
            played,
            loaded,
            duration,
            loop,
        } = this.state

        // const playIcon = <i className="fa fa-play-circle" />;
        const playIcon = <div className="icon play" />
        const pauseIcon = <div className="icon pause" />
        // const pauseIcon = <i classNameName="fa fa-pause-circle" />;
        const prevIcon = <div className="icon prev" />
        const nextIcon = <div className="icon next" />
        const shuffleIcon = <div className="icon shuffle" />
        const shuffleSelectedIcon = <div className="icon shuffle-selected" />
        // const loopIcon = <i classNameName="fa fa-exchange" />;
        const loopIcon = <div className="icon loop" />
        const loopSelectedIcon = <div className="icon loop-selected" />
        const loopTracklistIcon = <div className="icon loop-tracklist" />
        // const noloopIcon = <i className="fa fa-exchange selected" />;
        const volumeUp = <i className="fa fa-volume-up" />
        const volumeDown = <i className="fa fa-volume-down" />
        const volumeOff = <i className="fa fa-volume-off" />

        const volumeIcon =
            volume < 0.01 ? volumeOff : volume < 0.6 ? volumeDown : volumeUp

        // Really fine tuning on the overlay div
        let seekStyle =
            played < 0.001
                ? { width: "0" }
                : {
                      width: `${played * 100 + 0.5 - played * 0.5}%`,
                  }

        let volumeStyle =
            volume < 0.001
                ? { width: "0" }
                : {
                      width: `${volume * 100 + 0.5 - volume * 0.5}%`,
                  }

        return (
            <div className="footer-bar">
                <CurrentSongInfoContainer />
                {/* <button onClick={() => this.load('https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/01.+Idle+Delilah.mp3')}>Idle Delilah</button>
            <button onClick={() => this.load('https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/03.+Desperado.mp3')}>Desperado</button>
            <button onClick={() => this.load('https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/04.+Jfk+(feat.+Theophilus+London).mp3')}>JFK</button>
            <button onClick={() => this.load('https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/05.+212+(feat.+Lazy+Jay).mp3')}>212</button> */}
                <div className="play-bar col-5-11">
                    <div className="play-button">
                        <button onClick={this.toggleShuffle}>
                            {this.state.shuffle
                                ? shuffleSelectedIcon
                                : shuffleIcon}
                        </button>
                        <button onClick={this.prevSong}>{prevIcon}</button>
                        <button
                            className="play-pause"
                            onClick={this.togglePlay}
                        >
                            {playing ? pauseIcon : playIcon}
                        </button>
                        <button onClick={this.nextSong}>{nextIcon}</button>
                        <button
                            className="loop-button"
                            onClick={this.toggleLoop}
                        >
                            {loop === "loopSong" ? (
                                loopSelectedIcon
                            ) : loop === "loopTracklist" ? (
                                loopTracklistIcon
                            ) : loop === "none" ? (
                                loopIcon
                            ) : (
                                <div />
                            )}
                        </button>
                    </div>
                    <div className="progress-bar">
                        <ReactPlayer
                            url={currentSong}
                            // setting ref to the dom element for seekTo() helper method
                            ref={this.ref}
                            width="0px"
                            height="0px"
                            playing={playing}
                            onPlay={this.onPlay}
                            onPause={this.onPause}
                            loop={loop === "loopSong"}
                            volume={volume}
                            muted={muted}
                            played={played}
                            onEnded={this.onEnded}
                            onProgress={this.onProgress}
                            onDuration={this.onDuration}
                        />

                        <section className="progress-bar-wrapper">
                            {/* <progress max={1} value={played} className="played" /> */}
                            <div className="progress-bar-with-duration">
                                <Duration seconds={duration * played} />
                                <div className="overlay-wrapper">
                                    <div className="played" style={seekStyle} />
                                    <div className="player-underlay" />
                                    <div className="seek-slider-wrapper">
                                        <input
                                            className="seek-slider"
                                            type="range"
                                            step="any"
                                            min="0"
                                            max="1"
                                            value={played}
                                            onMouseDown={this.onSeekMouseDown}
                                            onChange={this.onSeekChange}
                                            onMouseUp={this.onSeekMouseUp}
                                        />
                                    </div>
                                </div>
                                <Duration seconds={duration} />
                            </div>
                        </section>
                    </div>
                </div>
                <div className="volume-bar col-3-11 ">
                    <button className="mute" onClick={this.toggleMuted}>
                        {volumeIcon}
                    </button>
                    <div className="progress-bar-with-duration">
                        <div className="overlay-wrapper">
                            <div className="played" style={volumeStyle} />
                            <div className="player-underlay" />
                            <div className="seek-slider-wrapper">
                                <input
                                    type="range"
                                    className="seek-slider"
                                    step="any"
                                    min="0"
                                    max="1"
                                    value={volume}
                                    onChange={this.handleVolume}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MediaPlayer
