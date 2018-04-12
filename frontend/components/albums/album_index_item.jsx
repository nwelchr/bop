import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends React.Component {

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
        const playIcon = <i className="fa fa-play-circle"></i>;
        const pauseIcon = <i className="fa fa-pause-circle"></i>;

        return (<div className="media-wrapper">
            <div className="button-wrapper">
                <button className="play-pause" onClick={this.props.play} style={{ display: 'none' }}>{playIcon}</button>
            </div>
            <Link className="music-index-item" to={`/albums/${this.props.album.id}`}><li className="item-wrapper">
                <div className="media"><img alt="" className="media__image" src={this.props.album.album_cover_url} />
                    <div className="media__body">
                    </div>
                    <div className="media-loaded">
                    </div>
                </div>
                <p>{this.props.album.title}</p>
            </li>
            </Link>
        </div>
        );
    }
}

export default AlbumIndexItem;