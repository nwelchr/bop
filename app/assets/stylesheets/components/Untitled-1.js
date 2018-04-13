import React from "react";
import ReactPlayer from "react-player";

import Duration from "./Duration";

import CurrentSongInfoContainer from "./current_song_info_container";

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSong: "",
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      loop: false
    };

    this.togglePlay = this.togglePlay.bind(this);
    this.stop = this.stop.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.toggleMuted = this.toggleMuted.bind(this);
    this.toggleLoop = this.toggleLoop.bind(this);
    // this.onPlay = this.onPlay.bind(this);
    // this.onPause = this.onPause.bind(this);
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onDuration = this.onDuration.bind(this);
    this.ref = this.ref.bind(this);
    this.load = this.load.bind(this);
    this.onEnded = this.onEnded.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      playing: nextProps.playing,
      currentSong: nextProps.currentSong.mp3_url
    });
  }

  load(url) {
    this.setState({
      url: url,
      played: 0,
      playing: true
    });
  }

  ref(player) {
    this.player = player;
  }

  togglePlay() {
    if (!this.state.currentSong) {
      return;
    }
    if (this.state.playing === true) this.props.pause();
    else this.props.play();
  }

  stop() {
    this.setState({ url: null, playing: false, played: 0 });
  }


  onEnded() {
      this.props.pause();
    }
  }

  // onPlay() {
  //   this.setState({ playing: true });
  // }

  // onPause() {
  //   this.setState({ playing: false });
  // }

  // happens as soon as the component renders
  onDuration(duration) {
    this.setState({ duration });
  }

  render() {

    const {
      currentSong,
      playing,
      volume,
      muted,
      played,
      loaded,
      duration,
      loop
    } = this.state;


    return (
            <ReactPlayer
              url={currentSong}
              ref={this.ref}
              width="0px"
              height="0px"
              playing={playing}
              onPlay={this.onPlay}
              onPause={this.onPause}
              volume={volume}
              muted={muted}
              loop={loop}
              played={played}
              onEnded={this.onEnded}
              onProgress={this.onProgress}
              onDuration={this.onDuration}
            />

    );
  }
}

export default MediaPlayer;
