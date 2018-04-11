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

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    console.log(this.state.played, 'duration');
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
    if (!this.props.currentSong) {
      return;
    }
    if (this.state.playing === true) this.props.pause();
    else this.props.play();
  }

  stop() {
    console.log(this.state.played, 'stop');
    this.setState({ url: null, playing: false, played: 0 });
  }

  handleVolume(e) {
    this.setState({ volume: e.target.value });
  }

  toggleMuted() {
    this.setState({ muted: !this.state.muted });
  }

  toggleLoop() {
    this.setState({ loop: !this.state.loop });
  }

  onEnded() {
    if (!this.state.loop) {
      this.setState({ playing: false, played: 0 });
      this.props.pause();
    }
  }

  // onPlay() {
  //   this.setState({ playing: true });
  // }

  // onPause() {
  //   this.setState({ playing: false });
  // }

  onSeekMouseDown() {
    this.setState({ seeking: true });
  }

  onSeekChange(e) {
    if (!this.state.playing && !this.state.currentSong) { return; }
    this.setState({ played: e.target.value });
  }

  onSeekMouseUp(e) {
    this.setState({ seeking: false });
    // this.setState({played: e.target.value});
    this.player.seekTo(e.target.value);
  }

  onProgress(state) {
    // If song is finished (played value is 1), set back to the beginning
    // Otherwise, set played
    if (!this.state.seeking) {
      this.setState({ played: state.played === 1 ? '0' : state.played });
    }
  }

  // happens as soon as the component renders
  onDuration(duration) {
    console.log(this.state.played, 'duration');
    this.setState({ duration });
  }

  render() {
    //   const v = this.state.value;

    //   const styling =
    //   {
    //   background:  `-moz-linear-gradient(left,  #ed1e24 0%, #ed1e24 "+ ${v} +"%, #191919 "+ v +"%, #191919 100%)`,
    //   background:  `-webkit-gradient(linear, left top, right top, color-stop(0%,#ed1e24), color-stop("+ ${v} +"%,#ed1e24), color-stop("+ ${v} +"%,#191919), color-stop(100%,#191919))`,
    //   background: "-webkit-linear-gradient(left,  #ed1e24 0%,#ed1e24 "+ v +"%,#191919 "+ v +"%,#191919 100%)",
    //   background: "-o-linear-gradient(left,  #ed1e24 0%,#ed1e24 "+ v +"%,#191919 "+ v +"%,#191919 100%)",
    //   background: "-ms-linear-gradient(left,  #ed1e24 0%,#ed1e24 "+ v +"%,#191919 "+ v +"%,#191919 100%)",
    //   background: "linear-gradient(to right,  #ed1e24 0%,#ed1e24 "+ v +"%,#191919 "+ v +"%,#191919 100%)"
    // };

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

    const playIcon = <i className="fa fa-play-circle" />;
    const pauseIcon = <i className="fa fa-pause-circle" />;
    const loopIcon = <i className="fa fa-exchange" />;
    const noloopIcon = <i className="fa fa-exchange selected" />;
    const volumeUp = <i className="fa fa-volume-up" />;
    const volumeDown = <i className="fa fa-volume-down" />;
    const volumeOff = <i className="fa fa-volume-off" />;

    // Really fine tuning on the overlay div
    console.log(this.state.played);
    let style = (this.state.played < 0.001) ? { width: '0' } : {
      width: `${this.state.played * 100 + .5 - this.state.played * .5}%`
    };

    return (
      <div className="footer-bar">
        <CurrentSongInfoContainer />
        {/* <button onClick={() => this.load('https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/01.+Idle+Delilah.mp3')}>Idle Delilah</button>
            <button onClick={() => this.load('https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/03.+Desperado.mp3')}>Desperado</button>
            <button onClick={() => this.load('https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/04.+Jfk+(feat.+Theophilus+London).mp3')}>JFK</button>
            <button onClick={() => this.load('https://s3.us-east-2.amazonaws.com/bop-songs/Azealia+Banks+-+Broke+With+Expensive+Taste+(2014)/05.+212+(feat.+Lazy+Jay).mp3')}>212</button> */}
        <div className="play-bar col-5-11">
          <div className="play-button">
            <button className="play-pause" onClick={this.togglePlay}>
              {playing ? pauseIcon : playIcon}
            </button>
            <button className="loop" onClick={this.toggleLoop}>
              {loop ? noloopIcon : loopIcon}
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
              volume={volume}
              muted={muted}
              loop={loop}
              played={played}
              onEnded={this.onEnded}
              onProgress={this.onProgress}
              onDuration={this.onDuration}
            />

            <section class="progress-bar-wrapper">
              {/* <progress max={1} value={played} class="played" /> */}
              <div class="progress-bar-with-duration">
                <Duration seconds={duration * played} />
                <div class="overlay-wrapper">
                  <div class="played" style={style} />
                  <div class="player-underlay" />
                  <div class="seek-slider-wrapper">
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
        <div className="volume-bar col-3-11">
          <button className="mute" onClick={this.toggleMuted}>
            {muted ? volumeOff : volumeUp}
          </button>
          <input
            type="range"
            step="any"
            min="0"
            max="1"
            value={volume}
            onChange={this.handleVolume}
          />
        </div>
      </div>
    );
  }
}

export default MediaPlayer;