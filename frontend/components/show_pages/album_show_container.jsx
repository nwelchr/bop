import AlbumShow from "./album_show"
import { connect } from "react-redux"

import {
    fetchAlbum,
    deleteAlbum,
    fetchModalAlbums,
} from "../../actions/album_actions"
import { fetchSong, removeSongFromAlbum } from "../../actions/song_actions"
import { play, pause, playSong } from "../../actions/audio_actions"

import { openAddToAlbumForm } from "../../actions/ui_actions"

const mapStateToProps = (state, ownProps) => {
    return {
        album: state.entities.albums[parseInt(ownProps.match.params.albumId)],
        loading: state.ui.loading.global,
        background: { backgroundColor: "#65426f" },
        currentUser: state.session.currentUser,
        currentSong: state.ui.playbar.currentSong,
        playing: state.ui.playbar.playing,
        songs: Object.values(state.entities.songs),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
        fetchSong: (songId) => dispatch(fetchSong(songId)),
        play: () => dispatch(play()),
        pause: () => dispatch(pause()),
        playSong: (song) => dispatch(playSong(song)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow)
