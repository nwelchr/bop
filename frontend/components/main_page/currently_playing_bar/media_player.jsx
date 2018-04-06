import React from 'react';
import ReactPlayer from 'react-player';

import Duration from './Duration';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null,
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      loop: false,
    };

      this.togglePlay = this.togglePlay.bind(this);
      this.stop = this.stop.bind(this);
      this.handleVolume = this.handleVolume.bind(this);
      this.toggleMuted = this.toggleMuted.bind(this);
      this.toggleLoop = this.toggleLoop.bind(this);
      this.onPlay = this.onPlay.bind(this);
      this.onPause = this.onPause.bind(this);
      this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
      this.onSeekChange = this.onSeekChange.bind(this);
      this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
      this.onProgress = this.onProgress.bind(this);
      this.onDuration = this.onDuration.bind(this);
      this.ref = this.ref.bind(this);
  }

  ref(player) {
    this.player = player;
  }

  togglePlay() {
    this.setState({ playing: !this.state.playing });
  }

  stop() {
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

  onPlay() {
    this.setState({ playing: true });
  }

  onPause() {
    this.setState({ playing: false });
  }

  onSeekMouseDown() {
    this.setState({ seeking: true });
  }

  onSeekChange(e) {
    this.setState( { played: e.target.value });
  }

  onSeekMouseUp(e) {
    this.setState({ seeking: false });
    // this.setState({played: e.target.value});
    this.player.seekTo(e.target.value);
  }

  onProgress(state) {
    if (!this.state.seeking) {
      this.setState({played: state.played});
    }
  }

  // happens as soon as the component renders
  onDuration(duration) {
    this.setState({ duration });
  }

  render () {
    const { url, playing, volume, muted, played, loaded, duration, loop } = this.state;

    const playIcon = <i class="fa fa-play-circle"></i>;
    const pauseIcon = <i className="fa fa-pause-circle"></i>;
    const loopIcon = <i className="fa fa-exchange"></i>;
    const noloopIcon = <i className="fa fa-exchange selected"></i>;
    const volumeUp = <i class="fa fa-volume-up"></i>;
    const volumeDown = <i class="fa fa-volume-down"></i>;
    const volumeOff = <i class="fa fa-volume-off"></i>;

    return (
      <div class="footer-bar">
          <div class="song-info col-3-11">sdf</div>
          <div class="play-bar col-5-11">
            <div class="play-button">
              <button className="play-pause" onClick={this.togglePlay}>{playing ? pauseIcon : playIcon}</button>
              <button className="loop" onClick={this.toggleLoop}>{loop ? noloopIcon : loopIcon}</button>
            </div>
          <div class="progress-bar">
            <Duration seconds={duration * played} />
          <ReactPlayer 
            url='https://a.tumblr.com/tumblr_m71074DUbH1qck9hho1.mp3' 
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

            <input 
              type="range" 
              step="any" 
              min="0" 
              max="1"
              value={played}
              onMouseDown={this.onSeekMouseDown}
              onChange={this.onSeekChange}
              onMouseUp={this.onSeekMouseUp} />

            <Duration seconds={duration} />
             {/* <progress max={1} value={played} /> */}
             </div>
          </div>
            <div class="volume-bar col-3-11">
              <button className="mute" onClick={this.toggleMuted}>{muted ? volumeOff : volumeUp}</button>
              <input 
                type="range" 
                step="any" 
                min="0" 
                max="1" 
                value={volume}
                onChange={this.handleVolume} />
            </div>
          </div>
      );
  }
}

export default MediaPlayer;