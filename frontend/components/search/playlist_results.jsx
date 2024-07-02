import React from 'react';
import PlaylistIndexItem from '../playlists/playlist_index_item';

class PlaylistResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { playlists } = this.props;
    return (
      <ul>
        {playlists.map((playlist) => (
          <PlaylistIndexItem
            key={playlist.id}
            playlist={playlist}
            renderButton={true}
          />
        ))}
      </ul>
    );
  }
}

export default PlaylistResults;
