import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class MediaPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyPlaying: false,
      loop: false,
      volume: .5,
    };

    this.togglePlay = this.togglePlay.bind(this);
    // this.toggleMute = this.toggleMute.bind(this);
    // this.toggleLoop = this.toggleLoop.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  togglePlay() {
    this.setState({ currentlyPlaying: !this.state.currentlyPlaying });
  }

  handleVolume(e) {
    this.setState({ volume: e.target.value });
    console.log(this.state);
  }

  // toggleLoop() {

  // }

  render () {
    return (
          <div>
            <ReactPlayer 
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
            playing={this.state.currentlyPlaying}
            volume={this.state.volume} />
            <button className="play-pause" onClick={this.togglePlay}>Play</button>
            <input type="range" step=".001" min="0" max="1" onChange={this.handleVolume} value={this.state.volume} />
            {/* <button className="loop" onClick={this.toggleLoop}>Loop</button> */}
          </div>
      );
  }
}

export default MediaPlayer;