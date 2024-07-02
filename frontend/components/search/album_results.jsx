import React from 'react';
import AlbumIndexItem from '../albums/album_index_item';

class AlbumResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { albums } = this.props;
    return (
      <ul>
        {albums.map((album) => (
          <AlbumIndexItem key={album.id} album={album} renderButton={true} />
        ))}
      </ul>
    );
  }
}

export default AlbumResults;
