import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPlaylist(parseInt(this.props.match.params.playlistId));
    }
    
    render () {
        debugger;
        return this.props.loading ? <div>loading...</div> :
        (
            <div>
                {this.props.playlist.songs.map(song => {
                    return <SongIndexItem key={song.id} song={song} />;
                })}
            </div>
        );
    }
}

export default PlaylistShow;

// {playlist.songs.map(song => <li>{song.title}</li>)

class SongIndexItem extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.song.title}</li>
            </div>

        );
    }
}