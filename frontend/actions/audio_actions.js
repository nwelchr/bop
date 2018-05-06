export const PLAY = "PLAY";
export const PLAY_SONG = "PLAY_SONG";
export const RECEIVE_PLAY_SONG_WITH_TRACKLIST = "RECEIVE_PLAY_SONG_WITH_TRACKLIST";
export const PAUSE = "PAUSE";

export const play = () => ({
    type: PLAY
});

export const playSong = (song, params, isFirstSong) => ({
    type: PLAY_SONG,
    song,
    params,
    isFirstSong
});

export const receivePlaySongWithTracklist = (song, params, tracklist) => ({
    type: RECEIVE_PLAY_SONG_WITH_TRACKLIST,
    song,
    params,
    tracklist
});

export const pause = () => ({
    type: PAUSE
});

export const playSongWithTracklist = (song, params, tracklist) => (dispatch) => {
    dispatch(receivePlaySongWithTracklist(song, params, tracklist));
    dispatch(playSong(song, params));
};