import ArtistIndex from "./artist_index"
import { connect } from "react-redux"

import { fetchArtists, fetchArtist } from "../../actions/artist_actions"
import { play } from "../../actions/audio_actions"

import { openPlaylistForm } from "../../actions/ui_actions"

const mapStateToProps = (state) => {
    return {
        artists: Object.values(state.entities.artists),
        loading: state.ui.loading.global,
        background: { backgroundColor: "#0c5535" },
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArtists: () => dispatch(fetchArtists()),
        play: () => dispatch(play()),
        openPlaylistForm: () => dispatch(openPlaylistForm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex)
