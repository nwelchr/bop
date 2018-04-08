import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import SongIndexItem from '../songs/song_index_item';
import PlaylistIndexItem from '../playlists/playlist_index_item';

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }

    render() {
        if (this.props.loading) { console.log("loading...");}
        if ((typeof this.props.playlist === "undefined") || (typeof this.props.playlist.songs === "undefined")) {
            return <div>"loading..."</div>;
        }
        else {
            return (
                <main className="main" style={this.props.background}>
                <main class="show-page-main">
                    <section class="show-info">
                        <PlaylistIndexItem key={this.props.playlist.id} playlist={this.props.playlist} />
                        
                    </section>
                    <section class="show-songs">
                        <ol>
                            {this.props.playlist.songs.map(song => {
                                return (
                                <SongIndexItem 
                                    key={song.id} 
                                    song={song} 
                                    fetchSong={this.props.fetchSong}
                                    play={this.props.play}
                                    playSong={this.props.playSong}
                                    />);
                            })}
                        </ol>
                    </section>
                </main>
                </main>
            );
        }
    }
}

export default PlaylistShow;