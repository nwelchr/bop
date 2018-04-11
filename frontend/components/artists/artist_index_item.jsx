import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $(document).on('mouseenter', '.media-wrapper', function () {
            $(this).find(":button").show();
        }).on('mouseleave', '.media-wrapper', function () {
            $(this).find(":button").hide();
        });
    }

    render() {

        const artistIndexStyle = {
          borderRadius: '50%'
        };

        const playIcon = <i className="fa fa-play-circle"></i>;
        const pauseIcon = <i className="fa fa-pause-circle"></i>;

        return (<div className="media-wrapper">
            <div className="button-wrapper">
                <button className="play-pause" onClick={this.props.play} style={{ display: 'none' }}>{playIcon}</button>
            </div>
            <Link className="music-index-item" to={`/collection/artists/${this.props.artist.id}`}><li className="item-wrapper">
                <div className="media"><img alt="" style={artistIndexStyle} className="media__image" src={this.props.artist.artist_artwork_url}/>
                    <div className="media__body" style={artistIndexStyle}>
                    </div>
                    <div className="media-loaded" style={artistIndexStyle}>
                    </div>
                </div>
                <p>{this.props.artist.name}</p>
            </li>
            </Link>
        </div>
        );
    }
}

export default ArtistIndexItem;
