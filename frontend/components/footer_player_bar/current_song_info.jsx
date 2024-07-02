import React from 'react';
import { Link } from 'react-router-dom';

class CurrentSongInfo extends React.Component {
  render() {
    const { currentSong } = this.props;
    return !currentSong ? (
      <div className="song-info col-3-11" />
    ) : (
      <div className="song-info col-3-11">
        <section className="song-info-cover-art">
          <Link to={`/albums/${currentSong.album_id}`}>
            <img
              className="song-info-album-cover"
              src={currentSong.album_cover_url}
            />
          </Link>
        </section>
        <section className="song-info-links">
          <Link className="album-link" to={`/albums/${currentSong.album_id}`}>
            <span>{currentSong.title}</span>
          </Link>
          <Link
            className="artist-link"
            to={`/artists/${currentSong.artist_id}`}
          >
            <span>{currentSong.artist}</span>
          </Link>
        </section>
        <section className="song-info-add-song"></section>
      </div>
    );
  }
}

export default CurrentSongInfo;
