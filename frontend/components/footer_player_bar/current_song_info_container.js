import CurrentSongInfo from "./current_song_info"
import { connect } from "react-redux"

const mapStateToProps = (state, ownProps) => {
    return {
        currentSong: state.ui.playbar.currentSong,
    }
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, null)(CurrentSongInfo)
