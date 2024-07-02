import React from 'react';
import ArtistIndexItem from '../artists/artist_index_item';

class ArtistResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { artists } = this.props;
    return (
      <ul>
        {artists.map((artist) => (
          <ArtistIndexItem
            key={artist.id}
            artist={artist}
            renderButton={true}
          />
        ))}
      </ul>
    );
  }
}

export default ArtistResults;
