import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthRoute } from "../../util/route_util";
import SongIndexItemContainer from "./song_index_item_container";

import YourMusicTopNavBar from "../navbar/top_navbar";

class SongIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props;
  }

  componentDidMount() {
    // if (this.props.songs.length < 1) this.props.fetchSongs();
    this.props.fetchSongs();
    
  }

  render() {
    if (this.props.loading) {
      return <div />;
    } else {
      return (
        <main className="main" style={this.props.background}>
          <main className="index-page-wrapper">
            <YourMusicTopNavBar />
            <main className="music-index">
              <div className="music-index-wrapper">
                <main className="show-page-main">
                  <section className="show-songs song-container">
                    <ol>
                      {this.props.songs.map(song => {
                        return (
                          <SongIndexItemContainer
                            key={song.id}
                            song={song}
                          />
                        );
                      })}
                    </ol>
                  </section>
                </main>
              </div>
            </main>
          </main>
        </main>
      );
    }
  }
}

export default SongIndex;
