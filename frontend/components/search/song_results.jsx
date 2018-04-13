import React from 'react';
import SongIndexItemContainer from '../songs/song_index_item_container';

class SongResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { songs } = this.props;
    return (
      <main className="show-page-main search-songs">
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
    );
  }
}

export default SongResults;