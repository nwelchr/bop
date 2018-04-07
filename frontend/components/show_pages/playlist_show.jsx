import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import SongIndexItem from '../songs/song_index_item';

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("this is when we start fetching the playlist");
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }

    render() {
        if (this.props.loading) { console.log("loading...");}
        if ((typeof this.props.playlist === "undefined") || (typeof this.props.playlist.songs === "undefined")) {
            console.log("maybe loaded, maybe not");
            return <div>"loading..."</div>;
        }
        else {
            console.log("not loading...");
            return (
                <div>
                    {this.props.playlist.songs.map(song => {
                        return (
                        <SongIndexItem 
                            key={song.id} 
                            song={song} 
                            fetchSong={this.props.fetchSong}
                            play={this.props.play}
                            />);
                    })}
                </div>
            );
        }
    }
}

export default PlaylistShow;