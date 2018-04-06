import React from 'react';
import ReactPlayer from 'react-player';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null,
      playing: true,
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
      // this.onProgress = this.onProgress.bind(this);
      this.onDuration = this.onDuration.bind(this);
  }

  // ref = player => {
  //   this.player = player;
  // };

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
    this.player.seekTo(e.target.value);
  }

  onProgress(state) {
    if (!this.state.seeking) {
      this.setState(state);
    }
  }

  onDuration(duration) {
    this.setState({ duration });
  }

  render () {
    const { url, playing, volume, muted, played, loaded, duration, loop } = this.state;
    
    return (
          <div>
            <ReactPlayer 
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 

            width="100px"
            height="100px"
            playing={playing}
            onPlay={this.onPlay}
            onPause={this.onPause}
            volume={volume}
            muted={muted}
            loop={loop}
            played={played}
            onSeek={() => console.log("I'm seeking!!!!")}
            onEnded={this.onEnded}
             onProgress={this.onProgress}
             onDuration={this.onDuration}
            />


            <button className="play-pause" onClick={this.togglePlay}>{playing ? 'Pause' : 'Play'}</button>
            <button className="stop" onClick={this.stop}>Stop</button>

            <button className="mute" onClick={this.toggleMuted}>{muted ? 'Unmute' : 'Mute'}</button>
            <button className="loop" onClick={this.toggleLoop}>{loop ? 'No loop' : 'Loop'}</button>

            <progress max={1} value={played} />


            <input 
              type="range" 
              step="any" 
              min="0" 
              max="1"
              value={played}
              onMouseDown={this.onSeekMouseDown}
              onChange={this.onSeekChange}
              onMouseUp={this.onSeekMouseUp} />

            <input 
              type="range" 
              step="any" 
              min="0" 
              max="1" 
              value={volume}
              onChange={this.handleVolume} />

          </div>
      );
  }
}

export default MediaPlayer;